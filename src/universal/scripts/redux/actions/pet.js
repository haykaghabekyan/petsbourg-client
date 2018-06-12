import axios from "axios";
import { GET_USER_PROFILE, REMOVE_USER_PROFILE, SET_USER_PROFILE } from "../types";

export const addPet = data => {
    return dispatch => {
        const request = axios.post(`/api/pets`, data);

        request.then(response => {

            console.log(response.data);

        }).catch(error => {
            console.log("addPet -> error ->", error);
        });

        return request;
    };
};

export const getPetWithUser = data => {
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
