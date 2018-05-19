import {SET_USER, SET_USER_PETS, REMOVE_USER} from "../types";

const INITIAL_STATE = {
    profile: null,
    pets: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state, ...action.payload,
            };
        case SET_USER_PETS:
            return {
                ...state, pets: action.pets
            };
        case REMOVE_USER:
            return {
                ...INITIAL_STATE
            };
        default:
            return state;
    }
}
