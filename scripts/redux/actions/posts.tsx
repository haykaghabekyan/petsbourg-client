import axios from "axios";
import {SET_POSTS} from "../types";

const setPosts = (posts) => {
    return {
        type: SET_POSTS,
        posts
    };
};

const getPostsByUserId = (id) => {

    return dispatch => {

        const request = axios.get("/api/posts");

        request.then(response => {

            const {posts} = response.data;

            dispatch(setPosts(posts));

        }).catch (error => {
            console.log(error);
        });

        return request;

    };

};

export default getPostsByUserId;