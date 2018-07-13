import axios from "axios";
import { SET_PET, ADD_USER_PET } from "../types";

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

export const getPet = petId => {
    return dispatch => {

        const request = axios.get(`/api/pets/${ petId }`);

        request.then(response => {
            const { user, pet } = response.data;

            dispatch({
                type: SET_PET,
                payload: pet,
            });

        }).catch(error => {
            console.error(error);
        });

        return request;
    };
};

export const updatePet = (petId, data) => {
    return dispatch => {

        const request = axios.put(`/api/pets/${ petId }`, data);

        request.then(response => {

            console.log(response.data);

        }).catch(error => {
            console.error(error);
        });

        return request;
    };
};
