import { SET_ME, REMOVE_ME, ADD_USER_PET } from "../types";

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
