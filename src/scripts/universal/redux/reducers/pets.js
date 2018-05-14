import { SET_USER_PETS } from "../types";

const INITIAL_STATE = {
    petTypes: [],
    userPets: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_USER_PETS:
            return {
                ...state, userPets: action.pets
            };
        default:
            return state;
    }
}