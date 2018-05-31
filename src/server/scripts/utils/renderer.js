import React from "react";
import {renderToString} from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";

import reducer from "../../../universal/scripts/redux/reducers/index";
import App from "../../../universal/scripts/app";
import markup from "./markup";

const renderer = (location, preloadedState, hydrate) => {

    const context = {};

    const store = createStore(reducer, preloadedState, compose(applyMiddleware(thunk)));

    const markupString = renderToString(
        <StaticRouter location={location} context={context}>
            <Provider store={store}>
                <App />
            </Provider>
        </StaticRouter>
    );

    return markup(markupString, preloadedState, hydrate);

};

export default renderer;