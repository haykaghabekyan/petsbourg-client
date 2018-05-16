import "babel-polyfill";

import express from "express";
import path from "path";

const app = express();
app.use(express.static(path.join(__dirname, "../public")));

import AppRouter from "./routes/router";

const appRouter = new AppRouter();
app.use("/", appRouter.router);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
