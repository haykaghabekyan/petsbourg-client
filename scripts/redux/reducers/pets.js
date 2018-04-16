import {SET_PET_TYPES} from "../types";

const INITIAL_STATE = {
    petTypes: [{
        name: "Dog"
    }, {
        name: "Cat"
    }, {
        name: "Bird"
    }, {
        name: "Hamster"
    }, {
        name: "Rabbit"
    }, {
        name: "Fish"
    }],
    userPets: [],
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case SET_PET_TYPES:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }

}