import { SET_USER_PROFILE, REMOVE_USER, GET_USER_PROFILE } from "../types";

const INITIAL_STATE = {
    profile: null,
    pet: null,
    isFetching: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_USER_PROFILE:
            return {
                ...state, isFetching: true,
            };
        case SET_USER_PROFILE:
            return {
                ...state, ...action.payload, isFetching: false,
            };
        case REMOVE_USER:
            return {
                ...INITIAL_STATE
            };
        default:
            return state;
    }
}
