import { authDefaultState } from './auth.state';
import { SET_AUTH_ACTION, SET_AUTH_USER_ACTION, REMOVE_AUTH_SUCCEEDED_ACTION } from './auth.actions';

export const authReducer = (state = authDefaultState, action) => {
    switch (action.type) {
        case SET_AUTH_ACTION:
            return {
                ...state,
                ...action.payload,
            };
        case SET_AUTH_USER_ACTION:
            return {
                ...state,
                ...action.payload,
            };
        case REMOVE_AUTH_SUCCEEDED_ACTION:
            return authDefaultState;
        default:
            return state;
    }
};
