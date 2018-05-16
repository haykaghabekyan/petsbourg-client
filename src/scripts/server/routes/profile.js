import axios from "axios";
import renderer from "../utils/renderer";

const profileRouter = async (req, res) => {
    const { preloadedState, params: { userId } }  = req;

    let user = null;

    try {
        const result = await axios.get(`http://localhost:3000/api/users/${ userId }`);

        user = result.data.user;

    } catch (error) {
        console.error(error);
    }

    console.log(user);

    res.send(renderer(req.url, preloadedState, true));
};

export default profileRouter;
