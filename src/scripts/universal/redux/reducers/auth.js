import {SET_CURRENT_USER, REMOVE_CURRENT_USER} from "../types";

const initialState = {
    user: null
};

export default (state = initialState, action) => {

    switch (action.type) {
        case SET_CURRENT_USER:
            const user = action.user;
            return {
                user: user
            };
        case REMOVE_CURRENT_USER:
            return initialState;
        default:
            return state;
    }


}