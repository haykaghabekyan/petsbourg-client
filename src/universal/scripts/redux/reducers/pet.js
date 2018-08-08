import { PRELOADED_STATE } from "../preloaded-state";
import {GET_PET, SET_PET_PICTURE, SET_PET} from "../types";

const INITIAL_STATE = PRELOADED_STATE.pet;

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_PET:
            return {
                ...state,
                isFetching: true,
            };
        case SET_PET:
            return {
                ...state,
                ...action.payload,
                isFetching: false,
            };
        case SET_PET_PICTURE:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    ...action.payload,
                },
            };
        default:
            return state;
    }
}
