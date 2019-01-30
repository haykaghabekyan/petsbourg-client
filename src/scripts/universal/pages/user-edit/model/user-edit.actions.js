export const USER_EDIT_PAGE_LOAD_ACTION_TYPE = 'USER_EDIT_PAGE_LOAD_ACTION_TYPE';
export const userEditPageLoadAction = params => {
    return {
        type: USER_EDIT_PAGE_LOAD_ACTION_TYPE,
        payload: params,
    };
};

export const USER_EDIT_PAGE_LOAD_SUCCEEDED_ACTION_TYPE = 'USER_EDIT_PAGE_LOAD_SUCCEEDED_ACTION_TYPE';
export const userEditPageLoadSucceededAction = data => {
    return {
        type: USER_EDIT_PAGE_LOAD_SUCCEEDED_ACTION_TYPE,
        payload: data,
    };
};

export const USER_EDIT_PAGE_LOAD_FAILED_ACTION_TYPE = 'USER_EDIT_PAGE_LOAD_FAILED_ACTION_TYPE';
export const userEditPageLoadFailedAction = data => {
    return {
        type: USER_EDIT_PAGE_LOAD_FAILED_ACTION_TYPE,
        payload: data,
    };
};

export const USER_EDIT_PAGE_RESET_ACTION_TYPE = 'USER_EDIT_PAGE_RESET_ACTION_TYPE';
export const userEditPageResetAction = () => {
    return {
        type: USER_EDIT_PAGE_RESET_ACTION_TYPE,
    };
};
