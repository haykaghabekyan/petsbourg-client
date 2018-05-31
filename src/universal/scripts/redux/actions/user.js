import axios from "axios";
import { SET_USER, SET_USER_PETS } from "../types";

export const getUserProfile = userId => {

    return dispatch => {

        const request = axios.get(`./api/users/${userId}`);

        request.then(response => {

            const { user } = response.data;

            dispatch({
                type: SET_USER,
                payload: {
                    profile: user,
                    pets: user.Pets || [],
                },
            });

        }).catch(error => {
            dispatch({
                type: SET_USER,
                payload: {
                    profile: "NOT_FOUND",
                    pets: [],
                }
            });
        });

        return request;

    };

};
