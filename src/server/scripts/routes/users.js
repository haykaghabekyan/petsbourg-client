import axios from "axios";
import renderer from "../utils/renderer";

export default {
    get: async (req, res) => {
        const { url, preloadedState, params: { userId } }  = req;
        console.log(`/users/${ userId }`);

        try {
            const result = await axios.get(`/api/users/${ userId }`);

            const { user } = result.data;

            preloadedState.user.profile = user;
        } catch (error) {
            // console.error(error);
        }

        res.send(renderer(url, preloadedState, true));
    },
};
