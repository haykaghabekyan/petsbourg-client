import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";

import axios from "axios";

import UniversalCookies from "universal-cookie";
import jwt from "jsonwebtoken";
import { JWT_PUBLIC_KEY } from "../configs/jwt";

import App from "../../universal/app";
import reducer from "../../universal/redux/reducers/index";

import view from "../view";

const otherRoutes = (req, res) => {
    let context = {
        url: null
    };
    const preloadedState = {
        pets: {
            petTypes: [],
            userPets: []
        },
    };
    const hydrate = true;

    const { cookies } = new UniversalCookies(req.headers.cookie);

    try {
        const decoded = jwt.verify(cookies.jwtToken, JWT_PUBLIC_KEY);
        preloadedState["auth"] = {
            isAuthenticated: true,
            user: decoded.user
        };
    } catch(err) {
        //...
    }

    axios.get("http://localhost:3000/api/pets/pet-types").then(response => {

        preloadedState.pets.petTypes = response.data.petTypes;

        const store = createStore(reducer, preloadedState, compose(applyMiddleware(thunk)));

        const markup = renderToString(
            <StaticRouter location={req.url} context={context}>
                <Provider store={store}>
                    <App />
                </Provider>
            </StaticRouter>
        );

        res.send(view(markup, preloadedState, hydrate));

    }).catch(error => {
        console.log(error);
    });

};

export default otherRoutes;