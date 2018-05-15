import {SET_USER, REMOVE_USER} from "../types";

const INITIAL_STATE = {
    profile: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state, profile: action.profile
            };
        case REMOVE_USER:
            return {
                ...INITIAL_STATE
            };
        default:
            return state;
    }
}
