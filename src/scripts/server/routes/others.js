import "babel-polyfill";

import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";

import axios from "axios";

import UniversalCookie from "universal-cookie";
import * as jwt from "jsonwebtoken";
import { JWT_PUBLIC_KEY } from "../configs/jwt";

import App from "../../universal/app";
import reducer from "../../universal/redux/reducers/index";

import view from "../view";

const otherRoutes = async (req, res) => {
    let context = {
        url: null
    };
    const preloadedState = {
        me: {
            profile: null,
            pets: null,
        },
        user: {
            profile: null,
        },
        pet: {
            petTypes: null,
        },
    };
    const hydrate = true;
    const cookies = new UniversalCookie(req.headers.cookie);
    const jwtToken = cookies.get("jwtToken");

    if (jwtToken) {
        try {
            axios.defaults.headers.common['Authorization'] = `Bearer ${ jwtToken }`;

            const decodedToken = jwt.verify(jwtToken, JWT_PUBLIC_KEY);

            let pets = null;

            try {
                const result = await axios.get(`http://localhost:3000/api/users/${ decodedToken.profile.id }/pets`);

                pets = result.data.pets;
            } catch (error) {
                console.log("error while getting user pets", error);
            }

            preloadedState.me = {
                profile: decodedToken.profile,
                pets: pets,
            };

        } catch(error) {
            console.log("error", error);
        }
    }

    try {
        const result = await axios.get("http://localhost:3000/api/pets/pet-types");

        preloadedState.pet.petTypes = result.data.petTypes;
    } catch (error) {
        console.log("error", error);
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