import { Router } from "express";
import verifyToken from "../utils/verify-token";

import usersRouter from "./users";
import petsRouter from "./pets";
import indexRouter from "./index";

class ApiRouter {
    router = null;

    constructor () {
        this.router = Router();

        this.router.get('/sign-up', indexRouter);
        this.router.get('/search', verifyToken, indexRouter);
        this.router.get('/users/:userId', verifyToken, usersRouter.get);
        this.router.get('/pets/add', verifyToken, indexRouter);
        this.router.get('/pets/:petId', verifyToken, petsRouter.get);
        this.router.get('/pets/:petId/edit', verifyToken, indexRouter);
        this.router.get('*', verifyToken, indexRouter);
    }
}

export default ApiRouter;
