export const INDEX_PAGE_LOAD_ACTION_TYPE = 'INDEX_PAGE_LOAD_ACTION_TYPE';
export const indexPageLoadAction = () => {
    return {
        type: INDEX_PAGE_LOAD_ACTION_TYPE,
    };
};

export const INDEX_PAGE_LOAD_SUCCEEDED_ACTION_TYPE = 'INDEX_PAGE_LOAD_SUCCEEDED_ACTION_TYPE';
export const indexPageLoadSucceededAction = data => {
    return {
        type: INDEX_PAGE_LOAD_SUCCEEDED_ACTION_TYPE,
        payload: data,
    };
};

export const INDEX_PAGE_LOAD_FAILED_ACTION_TYPE = 'INDEX_PAGE_LOAD_FAILED_ACTION_TYPE';
export const indexPageLoadFailedAction = data => {
    return {
        type: INDEX_PAGE_LOAD_FAILED_ACTION_TYPE,
        payload: data,
    };
};
