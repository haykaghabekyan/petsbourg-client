import axios from "axios";
import {SET_PETS, SET_PET_TYPES} from "../types";

export const getPetTypes = () => {
    return dispatch => {

        const request = axios.get(`/api/pets/pet-types`);

        request.then(response => {

            const {petTypes} = response.data;

            dispatch({
                type: SET_PET_TYPES,
                payload: petTypes
            });

        }).catch (error => {
            console.log(error);
        });

        return request;

    };
};

export const getPetsByUserId = userId => {

    return dispatch => {

        const request = axios.get(`/api/users/${userId}/pets`);

        request.then(response => {

            const {pets} = response.data;

            dispatch({
                type: SET_PETS,
                payload: pets
            });

        }).catch (error => {
            console.log(error);
        });

        return request;
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
