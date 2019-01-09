import { meDefaultState } from './me.state';
import { SET_ME_ACTION } from './me.actions';

export const meReducer = (state = meDefaultState, action) => {
    switch (action.type) {
        case SET_ME_ACTION:
            return {
                ...state,
                profile: action.payload
            };
        default:
            return state;
    }
};
