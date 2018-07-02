import axios from "axios";
import jwt from "jsonwebtoken";
import { SET_ME, REMOVE_ME } from "../types";
import { setAuth, removeAuth } from "../../utils/auth";

export const setMe = me => {
    return {
        type: SET_ME,
        me,
    };
};

export const signIn = (data) => {
    return dispatch => {
        const req = axios.post("/api/auth/sign-in", data);

        req.then(response => {
            const { token } = response.data;

            setAuth(token);

            const decodedToken = jwt.decode(token);
            dispatch(setMe(decodedToken));

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

            setAuth(token);

            const decodedToken = jwt.decode(token);
            dispatch(setMe(decodedToken));

        }).catch(error => {
            console.log(error);
        });

        return req;
    };
};

export const signOut = () => {
    return dispatch => {
        removeAuth();

        dispatch({
            type: REMOVE_ME,
        });
    }
};
