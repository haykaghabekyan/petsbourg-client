import axios from "axios";
import {SET_PETS, SET_USER_PETS} from "../types";

export const setUserPets = pets => {
    return {
        type: SET_USER_PETS,
        pets
    };
};

export const addPet = data => {
    return dispatch => {
        const request = axios.post(`/api/pets`, data);

        request.then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });

        return request;
    };
};
