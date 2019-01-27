import { petPageDefaultState } from './pet.state';
import { PET_PAGE_RESET_ACTION_TYPE, PET_PAGE_LOAD_ACTION_TYPE, PET_PAGE_LOAD_FAILED_ACTION_TYPE, PET_PAGE_LOAD_SUCCEEDED_ACTION_TYPE } from './pet.actions';

export const petPageReducer = (state = petPageDefaultState, action) => {
    switch (action.type) {
        case PET_PAGE_LOAD_ACTION_TYPE:
            return {
                ...petPageDefaultState,
                isLoading: true,
            };
        case PET_PAGE_LOAD_FAILED_ACTION_TYPE:
            return {
                ...state,
                opened: true,
                isLoading: false,
                error: action.payload,
            };
        case PET_PAGE_LOAD_SUCCEEDED_ACTION_TYPE:
            return {
                ...state,
                opened: true,
                isLoading: false,
                ...action.payload,
            };
        case PET_PAGE_RESET_ACTION_TYPE:
            return petPageDefaultState;
        default:
            return state;
    }
};
