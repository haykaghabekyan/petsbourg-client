export const PET_PAGE_LOAD_ACTION_TYPE = 'PET_PAGE_LOAD_ACTION_TYPE';
export const petPageLoadAction = (params) => {
    return {
        type: PET_PAGE_LOAD_ACTION_TYPE,
        payload: params,
    };
};

export const PET_PAGE_LOAD_SUCCEEDED_ACTION_TYPE = 'PET_PAGE_LOAD_SUCCEEDED_ACTION_TYPE';
export const petPageLoadSucceededAction = data => {
    return {
        type: PET_PAGE_LOAD_SUCCEEDED_ACTION_TYPE,
        payload: data,
    };
};

export const PET_PAGE_LOAD_FAILED_ACTION_TYPE = 'PET_PAGE_LOAD_FAILED_ACTION_TYPE';
export const petPageLoadFailedAction = data => {
    return {
        type: PET_PAGE_LOAD_FAILED_ACTION_TYPE,
        payload: data,
    };
};

export const PET_PAGE_RESET_ACTION_TYPE = 'PET_PAGE_RESET_ACTION_TYPE';
export const petPageResetAction = () => {
    return {
        type: PET_PAGE_RESET_ACTION_TYPE,
    };
};

