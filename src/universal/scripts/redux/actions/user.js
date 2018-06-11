import axios from "axios";
import { REMOVE_USER_PROFILE, SET_USER_PROFILE } from "../types";

export const getUserProfile = userId => {
    return dispatch => {
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

export const removeUserProfile = () => {
    return dispatch => {
        dispatch({
            type: REMOVE_USER_PROFILE,
        });
    };
};
