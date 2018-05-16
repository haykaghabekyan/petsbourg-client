import UniversalCookie from "universal-cookie";
import axios from "axios/index";
import * as jwt from "jsonwebtoken";
import JWT_PUBLIC_KEY from "../configs/jwt";
import preloadedState from "./preloaded-state";

const verifyToken = async (req, res, next) => {

    axios.defaults.baseURL = 'http://localhost:3000';

    const cookies = new UniversalCookie(req.headers.cookie);
    const jwtToken = cookies.get("jwtToken");

    if (jwtToken !== "undefined") {
        axios.defaults.headers.common['Authorization'] = `Bearer ${ jwtToken }`;

        try {
            axios.defaults.headers.common['Authorization'] = `Bearer ${ jwtToken }`;

            const decodedToken = jwt.verify(jwtToken, JWT_PUBLIC_KEY);

            preloadedState.me = {
                profile: decodedToken.profile,
                pets: null,
            };

        } catch(error) {
            console.log("error", error);
        }
    }

    try {
        const result = await axios.get("/api/pets/pet-types");

        preloadedState.pet.petTypes = result.data.petTypes;
    } catch (error) {
        console.error(error);
    }

    req.preloadedState = preloadedState;

    next();
};

export default verifyToken;
