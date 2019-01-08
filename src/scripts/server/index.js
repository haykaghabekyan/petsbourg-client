import 'babel-polyfill';
import express from 'express';
import cors from 'cors';
import React from 'react';
import cookieParser from 'cookie-parser';
// import favicon from 'serve-favicon';
import { of } from 'rxjs';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import { Provider } from 'react-redux';
import { authMiddleware } from './middlewares/auth.middleware';
import { serviceMiddleware } from './middlewares/service.middleware';
import { getRoutes } from '../universal/routes';
import { App } from '../universal/app/app';
import { getStore } from '../universal/app/model/app.store';

const app = express();

// app.use(favicon('dist/browser/media/favicon.ico'));
app.use(cookieParser());
app.use(cors());

app.use( (req, res, next) => {
    if (req.originalUrl && req.originalUrl.split('/').pop() === 'favicon.ico') {
        return res.sendStatus(204);
    }

    return next();
});

app.use(express.static('dist/browser'));

app.get('*', authMiddleware, serviceMiddleware, (req, res) => {
    const location = req.url;
    const context = {};
    const store = getStore();

    const activeRoute = getRoutes().find((route) => matchPath(req.url, route)) || {};

    let loadPageObserver;
    if (activeRoute.loadPage) {
        loadPageObserver = activeRoute.loadPage(store);
    } else {
        loadPageObserver = {
            ready: of(true),
        };
    }

    loadPageObserver.ready.subscribe(ready => {
        if (ready) {
            const markupString = renderToString(
                <StaticRouter location={ location } context={ context }>
                    <Provider store={ store }>
                        <App />
                    </Provider>
                </StaticRouter>
            );

            res.send(`
                <!DOCTYPE html>
                <html lang="en">
                    <head>
                        <meta http-equiv="content-type" content="text/html" charset="utf-8" />
                        <meta name="viewport" content="width=device-width,initial-scale=1" />
                        <title>Petsbourg</title>
                        <link rel="stylesheet" href="/styles/main.css" />
                    </head>
                    <body>
                        <div id="root">${ markupString }</div>
                        
                        <script>
                        // WARNING: See the following for security issues around embedding JSON in HTML:
                        // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
                        window.__INITIAL_STATE__ = ${ JSON.stringify(store.getState()).replace(/</g, '\\\\\\\\\u003c')};
                        </script>
                    
                        <script defer src="/scripts/bundle.js"></script>
                    </body>
                </html>
            `);
        }
    });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server listening on port ${ port }`);
});
