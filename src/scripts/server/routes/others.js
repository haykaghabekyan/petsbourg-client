import "babel-polyfill";

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

const otherRoutes = async (req, res) => {
    let context = {
        url: null
    };
    const preloadedState = {
        auth: {
            isAuthenticated: false,
            user: null,
        },
        pets: {
            petTypes: [],
            userPets: [],
        },
    };
    const hydrate = true;

    const cookies = new UniversalCookies(req.headers.cookie);

    const jwtToken = cookies.get("jwtToken");

    try {
        const decoded = jwt.verify(jwtToken, JWT_PUBLIC_KEY);
        preloadedState.auth = {
            isAuthenticated: true,
            user: decoded.user
        };

        axios.defaults.headers.common['Authorization'] = `Bearer ${ jwtToken }`;
    } catch(error) {
        console.log("error", error);
    }

    try {
        const result = await axios.get("http://localhost:3000/api/pets");

        preloadedState.pets.userPets = result.data;
    } catch (error) {
        // console.log("error", error);
    }

    try {
        const result = await axios.get("http://localhost:3000/api/pet-types");

        preloadedState.pets.petTypes = result.data;
    } catch (error) {
        // console.log("error", error);
    }

    const store = createStore(reducer, preloadedState, compose(applyMiddleware(thunk)));

    const markup = renderToString(
        <StaticRouter location={req.url} context={context}>
            <Provider store={store}>
                <App />
            </Provider>
        </StaticRouter>
    );

    res.send(view(markup, preloadedState, hydrate));
};

export default otherRoutes;