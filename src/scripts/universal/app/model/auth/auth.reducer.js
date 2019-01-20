import { authDefaultState } from './auth.state';
import { SET_AUTH_ACTION } from './auth.actions';

export const authReducer = (state = authDefaultState, action) => {
    switch (action.type) {
        case SET_AUTH_ACTION:
            return {
                ...state,
                user: action.payload.user,
                pets: action.payload.pets,
            };
        default:
            return state;
    }
};
