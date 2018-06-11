import axios from "axios/index";
import jwt from "jsonwebtoken";
import JWT_PUBLIC_KEY from "../../../universal/scripts/configs/jwt";
import PRELOADED_STATE from "./preloaded-state";

const verifyToken = async (req, res, next) => {
    const { jwtToken = null } = req.cookies;
    const preloadedState = { ...PRELOADED_STATE };

    try {
        const decodedToken = jwt.verify(jwtToken, JWT_PUBLIC_KEY);

        axios.defaults.headers.common['Authorization'] = `Bearer ${ jwtToken }`;

        try {
            const result = await axios.get(`/api/users/${ decodedToken.profile.id }`);

            const { user } = result.data;

            preloadedState.me = {
                profile: user,
            };

        } catch (error) {
            // console.error(error);
        }

    } catch(error) {
        // console.error(error);

        res.clearCookie("jwtToken");
    }

    try {
        const result = await axios.get("/api/pets/pet-types");

        preloadedState.pet.petTypes = result.data.petTypes;
    } catch (error) {
        // console.error(error);
    }

    req.preloadedState = preloadedState;

    next();
};

export default verifyToken;
