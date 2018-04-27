import "../../styles/master.scss";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { setAxiosConfigs } from "../universal/configs/axios";
import reducer from "../universal/redux/reducers";
import App from "../universal/app";

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window["__PRELOADED_STATE__"];
const hydrate = window["__HYDRATE__"];

// Allow the passed state to be garbage-collected
delete window["__PRELOADED_STATE__"];
delete window["__HYDRATE__"];

setAxiosConfigs();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create Redux store with initial state
const store = createStore(reducer, preloadedState, composeEnhancers(applyMiddleware(thunk)));

const a = (
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);

if (hydrate) {
    ReactDOM.hydrate(a,
        document.getElementById("root"),
        () => console.log("hydrate callback")
    );
} else {
    ReactDOM.render(a,
        document.getElementById("root"),
        () => console.log("render callback")
    );
}