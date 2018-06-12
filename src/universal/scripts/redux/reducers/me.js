import { SET_ME, REMOVE_ME } from "../types";

const INITIAL_STATE = {
    profile: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_ME:
            return {
                ...state, ...action.me
            };
        case REMOVE_ME:
            return {
                ...INITIAL_STATE
            };
        default:
            return state;
    }
}
