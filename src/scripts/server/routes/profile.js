import axios from "axios";
import preloadedState from "../utils/preloaded-state";
import renderer from "../utils/renderer";

const profileRouter = async (req, res) => {
    const { userId } = req.params;

    let user = null;

    try {
        const result = await axios.get(`http://localhost:3000/api/users/${ userId }`);

        user = result.data.user;

    } catch (error) {
        console.error(error);
    }

    try {
        const result = await axios.get("http://localhost:3000/api/pets/pet-types");

        preloadedState.pet.petTypes = result.data.petTypes;
    } catch (error) {
        console.error(error);
    }

    res.send(renderer(req.url, preloadedState, true));
};

export default profileRouter;
