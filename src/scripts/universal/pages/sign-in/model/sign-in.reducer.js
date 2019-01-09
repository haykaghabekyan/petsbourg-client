import { signInPageDefaultState } from './sign-in.state';
import {
    SIGN_IN_PAGE_SIGN_IN_ACTION,
    SIGN_IN_PAGE_SIGN_IN_FAILED_ACTION,
    SIGN_IN_PAGE_SIGN_IN_SUCCEEDED_ACTION,
} from './sign-in.actions';

export const signInPageReducer = (state = signInPageDefaultState, action) => {
    switch (action.type) {
        case SIGN_IN_PAGE_SIGN_IN_ACTION:
            return {
                ...state,
                isLoading: true,
            };
        case SIGN_IN_PAGE_SIGN_IN_FAILED_ACTION:
            return {
                ...state,
                isLoading: false,
                errors: action.payload,
            };
        case SIGN_IN_PAGE_SIGN_IN_SUCCEEDED_ACTION:
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
};
