import { userPageDefaultState } from './user.state';
import {
    USER_PAGE_LOAD_ACTION_TYPE,
    USER_PAGE_LOAD_FAILED_ACTION_TYPE,
    USER_PAGE_LOAD_SUCCEEDED_ACTION_TYPE,
} from './user.actions';

export const userPageReducer = (state = userPageDefaultState, action) => {
    switch (action.type) {
        case USER_PAGE_LOAD_ACTION_TYPE:
            return {
                ...state,
                isLoading: true,
            };
        case USER_PAGE_LOAD_FAILED_ACTION_TYPE:
            return {
                ...userPageDefaultState,
                opened: true,
                isLoading: false,
                error: action.payload,
            };
        case USER_PAGE_LOAD_SUCCEEDED_ACTION_TYPE:
            return {
                ...userPageDefaultState,
                opened: true,
                isLoading: false,
                ...action.payload,
            };
        default:
            return state;
    }
};
