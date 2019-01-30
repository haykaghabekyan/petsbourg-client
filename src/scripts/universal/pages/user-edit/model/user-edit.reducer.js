import { userEditPageDefaultState } from './user-edit.state';
import { USER_EDIT_PAGE_LOAD_ACTION_TYPE } from './user-edit.actions';

export const userEditPageReducer = (state = userEditPageDefaultState, action) => {
    switch (action.type) {
        case USER_EDIT_PAGE_LOAD_ACTION_TYPE:
            return {
                ...state,
                isLoading: true,
            };
        default:
            return state;
    }
};
