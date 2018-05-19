import axios from "axios/index";
import * as jwt from "jsonwebtoken";
import JWT_PUBLIC_KEY from "../../universal/configs/jwt";
import PRELOADED_STATE from "./preloaded-state";

const verifyToken = async (req, res, next) => {

    axios.defaults.baseURL = 'http://localhost:3000';

    const { jwtToken = null } = req.cookies;
    const preloadedState = { ...PRELOADED_STATE };

    try {
        const decodedToken = jwt.verify(jwtToken, JWT_PUBLIC_KEY);

        axios.defaults.headers.common['Authorization'] = `Bearer ${ jwtToken }`;

        try {
            const result = await axios.get(`/api/users/${ decodedToken.profile.id }/pets`);

            preloadedState.me = {
                profile: decodedToken.profile,
                pets: result.data.pets,
            };

        } catch (error) {
            console.error(error);
        }

    } catch(error) {
        res.clearCookie("jwtToken");

        console.error(error);
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
