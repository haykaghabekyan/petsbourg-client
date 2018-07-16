import { SET_ME, REMOVE_ME, ADD_USER_PET } from "../types";
import { PRELOADED_STATE } from "../preloaded-state";

const INITIAL_STATE = PRELOADED_STATE.me;

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_ME:
            return {
                ...state, ...action.payload,
            };
        case REMOVE_ME:
            return {
                ...INITIAL_STATE
            };
        case ADD_USER_PET:
            // TODO
            return state;
        default:
            return state;
    }
}
