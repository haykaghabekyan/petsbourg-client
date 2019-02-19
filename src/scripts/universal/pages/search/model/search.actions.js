export const SEARCH_PAGE_LOAD_ACTION_TYPE = 'SEARCH_PAGE_LOAD_ACTION';
export const searchPageLoadAction = payload => {
    return {
        type: SEARCH_PAGE_LOAD_ACTION_TYPE,
        payload,
    };
};

export const SEARCH_PAGE_SEARCH_ACTION_TYPE = 'SEARCH_PAGE_SEARCH_ACTION';
export const searchPageSearchAction = payload => {
    return {
        type: SEARCH_PAGE_SEARCH_ACTION_TYPE,
        payload,
    };
};

export const SEARCH_PAGE_LOAD_SUCCEEDED_ACTION_TYPE = 'SEARCH_PAGE_LOAD_SUCCEEDED_ACTION';
export const searchPageLoadSucceededAction = payload => {
    return {
        type: SEARCH_PAGE_LOAD_SUCCEEDED_ACTION_TYPE,
        payload,
    };
};

export const SEARCH_PAGE_LOAD_FAILED_ACTION_TYPE = 'SEARCH_PAGE_LOAD_FAILED_ACTION';
export const searchPageLoadFailedAction = payload => {
    return {
        type: SEARCH_PAGE_LOAD_FAILED_ACTION_TYPE,
        payload,
    };
};

