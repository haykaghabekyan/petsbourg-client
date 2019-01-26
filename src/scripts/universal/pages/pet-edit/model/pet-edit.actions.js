export const PET_EDIT_PAGE_LOAD_ACTION_TYPE = 'PET_EDIT_PAGE_LOAD_ACTION_TYPE';
export const petEditPageLoadAction = (params) => {
    return {
        type: PET_EDIT_PAGE_LOAD_ACTION_TYPE,
        payload: params,
    };
};

export const PET_EDIT_PAGE_LOAD_SUCCEEDED_ACTION_TYPE = 'PET_EDIT_PAGE_LOAD_SUCCEEDED_ACTION_TYPE';
export const petEditPageLoadSucceededAction = data => {
    return {
        type: PET_EDIT_PAGE_LOAD_SUCCEEDED_ACTION_TYPE,
        payload: data,
    };
};

export const PET_EDIT_PAGE_LOAD_FAILED_ACTION_TYPE = 'PET_EDIT_PAGE_LOAD_FAILED_ACTION_TYPE';
export const petEditPageLoadFailedAction = data => {
    return {
        type: PET_EDIT_PAGE_LOAD_FAILED_ACTION_TYPE,
        payload: data,
    };
};

export const PET_EDIT_PAGE_RESET_ACTION_TYPE = 'PET_EDIT_PAGE_RESET_ACTION_TYPE';
export const petEditPageResetAction = () => {
    return {
        type: PET_EDIT_PAGE_RESET_ACTION_TYPE,
    };
};

