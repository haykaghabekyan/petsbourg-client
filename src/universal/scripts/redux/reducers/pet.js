import { PRELOADED_STATE } from "../preloaded-state";
import { SET_PET } from "../types";

const INITIAL_STATE = PRELOADED_STATE.pet;

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_PET:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}
