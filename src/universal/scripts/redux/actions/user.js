import axios from "axios";
import { GET_USER_PROFILE, REMOVE_USER, SET_USER_PROFILE, SET_ME_PROFILE } from "../types";

export const getUserProfile = userId => {
    return dispatch => {

        dispatch({
            type: GET_USER_PROFILE,
        });

        const request = axios.get(`./api/users/${ userId }`);

        request.then(response => {
            const { user } = response.data;

            dispatch({
                type: SET_USER_PROFILE,
                payload: {
                    profile: user,
                },
            });

        }).catch(error => {
            console.error(error);
        });

        return request;
    };
};

export const updateUser = (userId, data) => {
    return dispatch => {

        const request = axios.put(`/api/users/${ userId }`, data);

        request.then(response => {
            const { user } = response.data;

            dispatch({
                type: SET_ME_PROFILE,
                payload: {
                    profile: user,
                },
            });

        }).catch(error => {
            console.error(error);
        });

        return request;
    };
};

export const removeUser = () => {
    return dispatch => {
        dispatch({
            type: REMOVE_USER,
        });
    };
};
