import { userEditPageDefaultState } from './user-edit.state';
import {
    USER_EDIT_PAGE_LOAD_ACTION_TYPE, USER_EDIT_PAGE_LOAD_SUCCEEDED_ACTION_TYPE, USER_EDIT_PAGE_LOAD_FAILED_ACTION_TYPE,
    USER_EDIT_PAGE_SAVE_SUCCEEDED_ACTION_TYPE, USER_EDIT_PAGE_SAVE_FAILED_ACTION_TYPE,
} from './user-edit.actions';

export const userEditPageReducer = (state = userEditPageDefaultState, action) => {
    switch (action.type) {
        case USER_EDIT_PAGE_LOAD_ACTION_TYPE:
            return {
                ...state,
                isLoading: true,
            };
        case USER_EDIT_PAGE_LOAD_SUCCEEDED_ACTION_TYPE:
            return {
                ...state,
                isLoading: false,
                opened: true,
                ...action.payload
            };
        case USER_EDIT_PAGE_LOAD_FAILED_ACTION_TYPE:
            return {
                ...state,
                error: action.payload,
                isLoading: false,
                opened: true,
            };
        case USER_EDIT_PAGE_SAVE_SUCCEEDED_ACTION_TYPE:
            return {
                ...state,
            };
        case USER_EDIT_PAGE_SAVE_FAILED_ACTION_TYPE:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};
