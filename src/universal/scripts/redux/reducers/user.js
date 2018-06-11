import { SET_USER_PROFILE, REMOVE_USER_PROFILE } from "../types";

const INITIAL_STATE = {
    profile: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {
                ...state, ...action.payload,
            };
        case REMOVE_USER_PROFILE:
            return {
                ...INITIAL_STATE
            };
        default:
            return state;
    }
}
