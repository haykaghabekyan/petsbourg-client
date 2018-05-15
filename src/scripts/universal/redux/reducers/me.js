import { SET_ME, SET_MY_PETS, REMOVE_ME } from "../types";

const INITIAL_STATE = {
    profile: null,
    pets: null,
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
