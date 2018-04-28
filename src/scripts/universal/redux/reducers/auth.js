import {SET_CURRENT_USER, REMOVE_CURRENT_USER} from "../types";
import {isEmpty} from "lodash";

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default (state = initialState, action) => {

    switch (action.type) {
        case SET_CURRENT_USER:
            const user = action.user;
            return {
                isAuthenticated: !isEmpty(user),
                user: user
            };
        case REMOVE_CURRENT_USER:
            return initialState;
        default:
            return state;
    }


}