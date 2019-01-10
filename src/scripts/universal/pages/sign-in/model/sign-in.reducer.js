import { signInPageDefaultState } from './sign-in.state';
import { SIGN_IN_PAGE_SIGN_IN_ACTION } from './sign-in.actions';

export const signInPageReducer = (state = signInPageDefaultState, action) => {
    switch (action.type) {
        case SIGN_IN_PAGE_SIGN_IN_ACTION:
            return {
                ...state,
                isLoading: true,
            };
        default:
            return state;
    }
};
