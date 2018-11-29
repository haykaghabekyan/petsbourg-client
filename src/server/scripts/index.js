import "babel-polyfill";
import express from "express";
import cookieParser from "cookie-parser";
import axios from "axios";
import AppRouter from "./routes/router";

const app = express();

app.use(cookieParser());
app.use(express.static("dist/browser"));

app.use((req, res, next) => {
    if (req.originalUrl && req.originalUrl.split("/").pop() === 'favicon.ico') {
        return res.sendStatus(204);
    }

    return next();
});

axios.defaults.baseURL = process.env.API_ENDPOINT ? process.env.API_ENDPOINT : "http://localhost:3003";

const appRouter = new AppRouter();
app.use(appRouter.router);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
