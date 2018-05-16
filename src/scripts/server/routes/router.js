import { Router } from "express";
import profileRouter from "./profile";
import indexRouter from "./index";
import verifyToken from "../utils/verify-token";

class ApiRouter {
    router = null;

    constructor () {
        this.router = Router();

        this.router.get('/sign-up', indexRouter);
        this.router.get('/:userId', verifyToken, profileRouter);
        this.router.get('*', verifyToken, indexRouter);
    }
}

export default ApiRouter;
