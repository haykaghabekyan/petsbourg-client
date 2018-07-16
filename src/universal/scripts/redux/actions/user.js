import axios from "axios";
import { REMOVE_USER, SET_USER, SET_ME } from "../types";

export const getUserProfile = userId => {
    return dispatch => {
        const request = axios.get(`/api/users/${ userId }`);

        request.then(response => {
            const { user } = response.data;

            dispatch({
                type: SET_USER,
                payload: user,
            });
        }).catch(error => {
            console.error(error);
        });

        return request;
    };
};

export const uploadProfilePicture = (userId, file) => {
    return dispatch => {
        const request = axios.post(
            `/api/uploads/${ userId }/profile`,
            file, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                onUploadProgress: progressEvent => {
                    console.log(progressEvent.loaded);
                },
            },
        );

        request.then(response => {

            console.log(response.data);

        }).catch(error => {
            console.error(error);
        });
    };
};

export const updateUserProfile = (userId, data) => {
    return dispatch => {
        const request = axios.put(`/api/users/${ userId }`, data);

        request.then(response => {
            const { user } = response.data;

            dispatch({
                type: SET_ME,
                payload: user,
            });

        }).catch(error => {
            console.error(error);
        });

        return request;
    };
};

export const removeUser = () => {
    return dispatch => {
        dispatch({
            type: REMOVE_USER,
        });
    };
};
