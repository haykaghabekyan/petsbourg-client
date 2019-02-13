import 'babel-polyfill';
import express from 'express';
import cors from 'cors';
import React from 'react';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { of } from 'rxjs';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import { Provider } from 'react-redux';
import { authMiddleware } from './middlewares/auth.middleware';
import { router } from './router';
import { getRoutes } from '../universal/routes';
import { App } from '../universal/app/app';
import { getStore } from '../universal/app/model/app.store';
import { setAuthAction } from '../universal/app/model/auth/auth.actions';
import { configs } from './utils/config';

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
                        <!-- Global site tag (gtag.js) - Google Analytics -->
                        <script async src="//www.googletagmanager.com/gtag/js?id=${ configs().tracking.google.trackingId }"></script>
                        <script>
                          window.dataLayer = window.dataLayer || [];
                          function gtag(){dataLayer.push(arguments);}
                          gtag('js', new Date());
                          gtag('config', '${ configs().tracking.google.trackingId }');
                        </script>
                        <meta http-equiv="content-type" content="text/html" charset="utf-8" />
                        <meta name="viewport" content="width=device-width,initial-scale=1" />
                        <title>Petsbourg</title>
                        <link rel="stylesheet" href="/styles/main.css" />
                        <base href="/" target="_blank">
                        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                        <script>
                          (adsbygoogle = window.adsbygoogle || []).push({
                            google_ad_client: "ca-pub-5037466754578890",
                            enable_page_level_ads: true
                          });
                        </script>
                    </head>
                    <body><div id="root">${ markupString }</div><script>window.__INITIAL_STATE__ = ${ JSON.stringify(store.getState()).replace(/</g, '\\\\\\\\\u003c')};</script><script defer src="/scripts/bundle.js"></script></body>
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
