import axios from "axios";
import {SET_PETS} from "../types";

const setPets = (pets) => {
    return {
        type: SET_PETS,
        pets
    };
};

export default function getPetsByUserId (userId) {

    return dispatch => {

        const request = axios.get(`/api/users/${userId}/pets`);

        request.then(response => {

            const {pets} = response.data;

            dispatch(setPets(pets));

        }).catch (error => {
            console.log(error);
        });

        return request;

    };

}

export function addPet (data) {
    return dispatch => {
        const request = axios.post(`/api/pets`, data);

        request.then(response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });

        return request;
    };
}