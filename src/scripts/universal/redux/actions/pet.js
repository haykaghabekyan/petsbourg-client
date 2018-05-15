import axios from "axios";

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
