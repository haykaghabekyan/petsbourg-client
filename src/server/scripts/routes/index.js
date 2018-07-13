import React from "react";
import renderer from "../utils/renderer";
import { PRELOADED_STATE } from "../../../universal/scripts/redux/preloaded-state";

const indexRouter = async (req, res) => {
    const { url, preloadedState = PRELOADED_STATE } = req;

    console.log("indexRouter", url);

    res.send(renderer(url, preloadedState, true));
};

export default indexRouter;

