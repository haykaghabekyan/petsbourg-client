import { indexPageDefaultState } from './index.state';
import {
    INDEX_PAGE_LOAD_ACTION_TYPE,
    INDEX_PAGE_LOAD_FAILED_ACTION_TYPE,
    INDEX_PAGE_LOAD_SUCCEEDED_ACTION_TYPE,
} from './index.actions';

export const indexPageReducer = (state = indexPageDefaultState, action) => {
    switch (action.type) {
        case INDEX_PAGE_LOAD_ACTION_TYPE:
            return {
                ...state,
                isLoading: true,
            };
        case INDEX_PAGE_LOAD_FAILED_ACTION_TYPE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case INDEX_PAGE_LOAD_SUCCEEDED_ACTION_TYPE:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            };
        default:
            return state;
    }
};
