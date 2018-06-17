import axios from "axios";
import renderer from "../utils/renderer";

export default {
    get: async (req, res) => {
        const { url, preloadedState, params: { petId } }  = req;
        console.log(`/pets/${ petId }`);

        try {
            const result = await axios.get(`/api/pets/${ petId }`);

            const { user, pet } = result.data;

            preloadedState.user.profile = user;
            preloadedState.user.pet = pet;
        } catch (error) {
            console.error(error);
        }

        res.send(renderer(url, preloadedState, true));
    },
};
