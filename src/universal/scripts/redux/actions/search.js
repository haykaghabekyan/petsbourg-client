import axios from "axios";

export const search = (params) => {
    return dispatch => {
        const request = axios.get('/api/search', {
            params: params,
        });

        request
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.error("Error while searching", error)
            });

        return request;
    };
};
