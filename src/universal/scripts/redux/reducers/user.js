import { SET_USER, REMOVE_USER } from "../types";
import { PRELOADED_STATE } from "../preloaded-state";

const INITIAL_STATE = PRELOADED_STATE.user;

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                ...action.payload,
            };
        case REMOVE_USER:
            return {
                ...INITIAL_STATE,
            };
        default:
            return state;
    }
}
