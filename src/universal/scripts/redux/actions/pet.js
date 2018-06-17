import axios from "axios";
import { GET_USER_PROFILE, REMOVE_USER_PROFILE, SET_USER_PROFILE, ADD_USER_PET } from "../types";

export const addPet = data => {
    return dispatch => {
        const request = axios.post(`/api/pets`, data);

        request.then(response => {

            const { pet } = response.data;

            dispatch({
                type: ADD_USER_PET,
                payload: {
                    pet: pet,
                }
            });
        }).catch(error => {
            console.log("addPet -> error ->", error);
        });

        return request;
    };
};

export const getPetWithUser = petId => {
    return dispatch => {

        dispatch({
            type: GET_USER_PROFILE,
        });

        const request = axios.get(`/api/pets/${ petId }`);

        request.then(response => {
            const { user, pet } = response.data;

            dispatch({
                type: SET_USER_PROFILE,
                payload: {
                    profile: user,
                    pet: pet,
                },
            });

        }).catch(error => {
            console.error(error);
        });

        return request;
    };
};
