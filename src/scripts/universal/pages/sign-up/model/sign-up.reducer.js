import { signUpPageDefaultState } from './sign-up.state';
import { SIGN_UP_PAGE_SIGN_UP_ACTION } from './sign-up.actions';

export const signUpPageReducer = (state = signUpPageDefaultState, action) => {
    switch (action.type) {
        case SIGN_UP_PAGE_SIGN_UP_ACTION:
            return {
                ...state,
                isLoading: true,
            };
        default:
            return state;
    }
};
