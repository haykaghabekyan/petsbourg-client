import axios from "axios";
import * as jwt from "jsonwebtoken";
import {REMOVE_CURRENT_USER, SET_CURRENT_USER} from "../types";
import {setAuth} from "../../utils/axios-configs";

export const setCurrentUser = (user) => {
    return {
        type: SET_CURRENT_USER,
        user
    };
};

export const removeCurrentUser = () => {
    return {
        type: REMOVE_CURRENT_USER
    };
};

export const signIn = (data) => {
    return dispatch => {
        const req = axios.post("/api/auth/sign-in", data);

        req.then(response => {
            const { token } = response.data;

            localStorage.setItem("token", token);
            setAuth(token);

            const decodedToken = jwt.decode(token);

            dispatch(setCurrentUser(decodedToken.user));
        }).catch(error => {
            console.log(error);
        });

        return req;
    };
};

export const signUp = (data) => {
    return dispatch => {
        const req = axios.post("/api/auth/sign-up", data);

        req.then(response => {
            const { token } = response.data;

            localStorage.setItem("token", token);
            setAuth(token);

            const decodedToken = jwt.decode(token);
            dispatch(setCurrentUser(decodedToken.user));
        }).catch(error => {
            console.log(error);
        });

        return req;
    };
};

export const signOut = () => {
    return dispatch => {
        localStorage.removeItem("token");

        dispatch(removeCurrentUser());
    }
};