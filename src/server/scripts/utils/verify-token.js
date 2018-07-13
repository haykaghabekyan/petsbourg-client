import axios from "axios/index";
import jwt from "jsonwebtoken";
import JWT_PUBLIC_KEY from "../../../universal/scripts/configs/jwt";
import { PRELOADED_STATE } from "../../../universal/scripts/redux/preloaded-state";

const verifyToken = async (req, res, next) => {
    const { jwtToken } = req.cookies;
    const preloadedState = { ...PRELOADED_STATE };

    if (jwtToken) {
        let decodedToken;
        try {
            decodedToken = jwt.verify(jwtToken, JWT_PUBLIC_KEY);

            axios.defaults.headers.common['Authorization'] = `Bearer ${ jwtToken }`;
        } catch(error) {
            console.error("1", error);

            res.clearCookie("jwtToken");
        }

        if (decodedToken) {
            try {
                const result = await axios.get(`/api/users/${ decodedToken.user._id }`);

                const { user } = result.data;

                preloadedState.me = user;

            } catch(error) {
                console.error("2", error);
            }
        }
    }

    try {
        const result = await axios.get("/api/pet-types");

        preloadedState.petTypes = result.data.petTypes;
    } catch (error) {
        console.error("3", error);
    }

    req.preloadedState = preloadedState;

    next();
};

export default verifyToken;
