import 'babel-polyfill';
import express from 'express';
import cors from 'cors';
import React from 'react';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import axios from 'axios';
import { of } from 'rxjs';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configs } from './utils/config';
import { authMiddleware } from './middlewares/auth.middleware';
import { router } from './router';
import { getRoutes } from '../universal/routes';
import { App } from '../universal/app/app';
import { getStore } from '../universal/app/model/app.store';
import { setAuthAction } from '../universal/app/model/auth/auth.actions';

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
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

app.use('/api', router());

app.get('*', authMiddleware, (req, res) => {
    const store = getStore();

    let isAuthenticated = false;
    if (req.auth) {
        isAuthenticated = true;
        store.dispatch(setAuthAction(req.auth));
    }

    const activeRoute = getRoutes(isAuthenticated).find((route) => {
        return matchPath(req.url, route);
    }) || {};

    const { params } = matchPath(req.url, activeRoute);

    let loadPageObserver;
    if (activeRoute.loadPage) {
        loadPageObserver = activeRoute.loadPage(store, params);
    } else {
        loadPageObserver = {
            ready: of(true),
        };
    }

    loadPageObserver.ready.subscribe(ready => {
        if (ready) {
            const markupString = renderToString(
                <StaticRouter location={ req.url } context={ {} }>
                    <Provider store={ store }>
                        <App />
                    </Provider>
                </StaticRouter>
            );

            const html = `
                <!DOCTYPE html>
                <html lang="en">
                    <head>
                        <!-- Google Tag Manager -->
                        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-W8FRN4C');</script>
                        <!-- End Google Tag Manager -->
                        <meta http-equiv="content-type" content="text/html" charset="utf-8" />
                        <meta name="viewport" content="width=device-width,initial-scale=1" />
                        <title>Petsbourg</title>
                        <link rel="stylesheet" href="/styles/main.css" />
                        <base href="/" target="_blank">
                    </head>
                    <body><!-- Google Tag Manager (noscript) -->
                        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W8FRN4C"
                        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
                        <!-- End Google Tag Manager (noscript) -->
                        <div id="root">${ markupString }</div><script>window.__INITIAL_STATE__ = ${ JSON.stringify(store.getState()).replace(/</g, '\\\\\\\\\u003c')};</script><script defer src="/scripts/bundle.js"></script>
                    </body>
                </html>
            `;
            res.send(html);
        }
    });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server listening on port ${ port }`);
});

// TODO
// Remove in production
setInterval(() => {
    axios.get(`${configs().frontend.url}`);
    axios.get(`${configs().backend.url}`);
}, 10 * 1000);
