const markup = (markup, preloadedState, hydrate=false) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta http-equiv="content-type" content="text/html" charset="utf-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <title>Petsbourg</title>
            
                <link rel="stylesheet" href="/styles/main.css" />
            </head>
            <body>
                <div id="root">${ markup }</div>
                
                <script>
                // WARNING: See the following for security issues around embedding JSON in HTML:
                // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
                window.__PRELOADED_STATE__ = ${ JSON.stringify(preloadedState ).replace(/</g, '\\\\\\\\\u003c')};
                window.__HYDRATE__ = ${hydrate};
                </script>
            
                <script defer src="/scripts/bundle.js"></script>
            </body>
        </html>
    `;
};

export default markup;
