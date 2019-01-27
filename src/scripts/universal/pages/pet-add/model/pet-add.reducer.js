import { petAddPageDefaultState } from './pet-add.state';
import {
    PET_ADD_PAGE_LOAD_ACTION,
    PET_ADD_PAGE_LOAD_SUCCEEDED_ACTION,
    PET_ADD_PAGE_LOAD_FAILED_ACTION,
    PET_ADD_PAGE_LOAD_BREEDS_ACTION,
    PET_ADD_PAGE_LOAD_BREEDS_SUCCEEDED_ACTION,
    PET_ADD_PAGE_LOAD_BREEDS_FAILED_ACTION,
} from './pet-add.actions';

export const petAddPageReducer = (state = petAddPageDefaultState, action) => {
    switch (action.type) {
        case PET_ADD_PAGE_LOAD_ACTION:
            return {
                ...state,
                isLoading: true,
            };
        case PET_ADD_PAGE_LOAD_SUCCEEDED_ACTION:
            return {
                ...state,
                isLoading: false,
                opened: true,
                ...action.payload,
            };
        case PET_ADD_PAGE_LOAD_FAILED_ACTION:
            return {
                ...state,
                isLoading: false,
                opened: true,
                error: action.payload,
            };
        case PET_ADD_PAGE_LOAD_BREEDS_ACTION:
            return {
                ...state,
                isLoadingBreeds: true,
            };
        case PET_ADD_PAGE_LOAD_BREEDS_SUCCEEDED_ACTION:
            return {
                ...state,
                isLoadingBreeds: false,
                ...action.payload,
            };
        case PET_ADD_PAGE_LOAD_BREEDS_FAILED_ACTION:
            return {
                ...state,
                isLoadingBreeds: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
