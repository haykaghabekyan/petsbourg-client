import axios from "axios";
import renderer from "../utils/renderer";

export default {
    get: async (req, res) => {
        const { url, preloadedState, params: { userId } }  = req;

        try {
            const result = await axios.get(`/api/users/${ userId }`);
            const { user } = result.data;

            preloadedState.user = {
                ...preloadedState.user,
                ...user,
            };
        } catch (error) {
            console.error("Error while getting user", error);
        }

        res.send(renderer(url, preloadedState, true));
    },
};
