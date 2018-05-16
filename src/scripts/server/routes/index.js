import React from "react";
import { renderToString } from "react-dom/server";

import axios from "axios";

import UniversalCookie from "universal-cookie";
import * as jwt from "jsonwebtoken";
import JWT_PUBLIC_KEY from "../configs/jwt";

import preloadedState from "../utils/preloaded-state";

import renderer from "../utils/renderer";

const indexRouter = async (req, res) => {
    const cookies = new UniversalCookie(req.headers.cookie);
    const jwtToken = cookies.get("jwtToken");

    if (jwtToken) {
        try {
            axios.defaults.headers.common['Authorization'] = `Bearer ${ jwtToken }`;

            const decodedToken = jwt.verify(jwtToken, JWT_PUBLIC_KEY);

            let pets = null;

            try {
                const result = await axios.get(`/api/users/${ decodedToken.profile.id }/pets`);

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

    res.send(renderer(req.url, preloadedState, true));
};

export default indexRouter;