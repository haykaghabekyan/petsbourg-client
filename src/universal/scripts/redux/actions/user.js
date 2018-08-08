import axios from "axios";
import {
    REMOVE_USER,
    GET_USER,
    SET_USER,
    SET_ME,
    SET_ME_PICTURE,
} from "../types";

export const getUserProfile = userId => {
    return dispatch => {
        dispatch({
            type: GET_USER,
        });

        const request = axios.get(`/api/users/${ userId }`);

        request.then(response => {
            const { user } = response.data;

            dispatch({
                type: SET_USER,
                payload: user,
            });
        }).catch(error => {
            dispatch({
                type: SET_USER,
                payload: null,
            });
            console.error("Error while getting the user", error);
        });

        return request;
    };
};

export const uploadUserPicture = (userId, file) => {
    return dispatch => {
        const request = axios.post(
            `/api/uploads/${ userId }/user`,
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
            const { picture } = response.data;

            dispatch({
                type: SET_ME_PICTURE,
                payload: {
                    picture: picture,
                },
            });
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
            console.error("Error while updating the user", error);
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
