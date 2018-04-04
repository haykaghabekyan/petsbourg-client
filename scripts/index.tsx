import "../styles/master.scss";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import * as jwt from "jsonwebtoken";

import { setAxoisConfigs, setAuth } from "./utils/axios-configs";
import reducer from "./redux/reducers";
import App from "./app";

setAxoisConfigs();

let auth = {
    isAuthenticated: false,
    user: {},
};

if (localStorage.token) {
    setAuth(localStorage.token);

    const encodedToken = jwt.decode(localStorage.token);

    auth = {
        isAuthenticated: true,
        user: encodedToken.user,
    }
}

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create Redux store with initial state
const store = createStore(
    reducer, {
        auth: auth,
    },
    composeEnhancers(applyMiddleware(thunk))
);

const a = (
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);

ReactDOM.render(a,
    document.getElementById("root"),
    () => console.log("render callback")
);