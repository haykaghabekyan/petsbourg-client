import axios from "axios";
import renderer from "../utils/renderer";

const profileRouter = async (req, res) => {
    const { url, preloadedState, params: { userId } }  = req;

    console.log("profileRouter", url);

    let user = null;

    try {
        const result = await axios.get(`/api/users/${ userId }`);

        user = result.data.user;

        preloadedState.user.profile = user;
        preloadedState.user.pets = user && user.Pets ? user.Pets : null;

    } catch (error) {
        console.error(error);

        preloadedState.user.profile = "NOT_FOUND";
    }

    res.send(renderer(url, preloadedState, true));
};

export default profileRouter;
