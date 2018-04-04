import {SET_PETS} from "../types";

const initialState = [];

export default (state = initialState, action) => {

    switch (action.type) {
        case SET_PETS:
            return action.pets;
        default:
            return state;
    }

}