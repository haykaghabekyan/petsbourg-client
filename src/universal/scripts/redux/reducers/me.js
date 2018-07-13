import { SET_ME, SET_ME_PROFILE, REMOVE_ME, ADD_USER_PET } from "../types";
import { PRELOADED_STATE } from "../preloaded-state";

const INITIAL_STATE = PRELOADED_STATE.me;

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_ME:
            return {
                ...state, ...action.payload,
            };
        case SET_ME_PROFILE:
            return {
                ...state,
                profile: {
                    ...action.payload.profile,
                    Pets: state.profile.Pets,
                },
            };
        case REMOVE_ME:
            return {
                ...INITIAL_STATE
            };
        case ADD_USER_PET:
            const newState = {
                ...state,
            };
            newState.profile.Pets.push(action.payload.pet);

            return newState;
        default:
            return state;
    }
}
