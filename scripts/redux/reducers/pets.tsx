import {SET_PETS, SET_PET_TYPES} from "../types";

const INITIAL_STATE = {
    petTypes: []
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case SET_PETS:
            return action.pets;
        case SET_PET_TYPES:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }

}