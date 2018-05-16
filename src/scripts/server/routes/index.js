import React from "react";
import renderer from "../utils/renderer";

const indexRouter = async (req, res) => {
    const preloadedState = req.preloadedState;

    res.send(renderer(req.url, preloadedState, true));
};

export default indexRouter;
