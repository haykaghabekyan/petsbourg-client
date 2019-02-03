import { petEditPageDefaultState } from './pet-edit.state';
import {
    PET_EDIT_PAGE_RESET_ACTION_TYPE,
    PET_EDIT_PAGE_LOAD_ACTION_TYPE,
    PET_EDIT_PAGE_LOAD_FAILED_ACTION_TYPE,
    PET_EDIT_PAGE_LOAD_SUCCEEDED_ACTION_TYPE,
    PET_EDIT_PAGE_UPDATE_SUCCEEDED_ACTION,
    PET_EDIT_PAGE_UPDATE_FAILED_ACTION
} from './pet-edit.actions';

export const petEditPageReducer = (state = petEditPageDefaultState, action) => {
    switch (action.type) {
        case PET_EDIT_PAGE_LOAD_ACTION_TYPE:
            return {
                ...state,
                isLoading: true,
            };
        case PET_EDIT_PAGE_LOAD_FAILED_ACTION_TYPE:
            return {
                ...state,
                opened: true,
                isLoading: false,
                error: action.payload,
            };
        case PET_EDIT_PAGE_LOAD_SUCCEEDED_ACTION_TYPE:
            return {
                ...state,
                opened: true,
                isLoading: false,
                ...action.payload,
            };
        case PET_EDIT_PAGE_RESET_ACTION_TYPE:
            return petEditPageDefaultState;
        case PET_EDIT_PAGE_UPDATE_SUCCEEDED_ACTION:
            return {
                ...state,
            };
        case PET_EDIT_PAGE_UPDATE_FAILED_ACTION:
            return {
                ...state,
            };
        default:
            return state;
    }
};
