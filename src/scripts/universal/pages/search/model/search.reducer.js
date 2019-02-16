import { searchPageDefaultState } from './search.state';
import { SEARCH_PAGE_LOAD_ACTION_TYPE, SEARCH_PAGE_LOAD_FAILED_ACTION_TYPE, SEARCH_PAGE_LOAD_SUCCEEDED_ACTION_TYPE } from './search.actions';

export const searchPageReducer = (state = searchPageDefaultState, action) => {
    switch (action.type) {
        case SEARCH_PAGE_LOAD_ACTION_TYPE:
            return {
                ...state,
                isLoading: true,
            };
        case SEARCH_PAGE_LOAD_SUCCEEDED_ACTION_TYPE:
            return {
                ...state,
                opened: true,
                isLoading: false,
                ...action.payload,
            };
        case SEARCH_PAGE_LOAD_FAILED_ACTION_TYPE:
            return {
                ...state,
                opened: true,
                isLoading: false,
            };
        default:
            return state;
    }
};
