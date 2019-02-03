export const USER_EDIT_PAGE_LOAD_ACTION_TYPE = 'USER_EDIT_PAGE_LOAD_ACTION_TYPE';
export const userEditPageLoadAction = payload => {
    return {
        type: USER_EDIT_PAGE_LOAD_ACTION_TYPE,
        payload,
    };
};

export const USER_EDIT_PAGE_LOAD_SUCCEEDED_ACTION_TYPE = 'USER_EDIT_PAGE_LOAD_SUCCEEDED_ACTION_TYPE';
export const userEditPageLoadSucceededAction = payload => {
    return {
        type: USER_EDIT_PAGE_LOAD_SUCCEEDED_ACTION_TYPE,
        payload,
    };
};

export const USER_EDIT_PAGE_LOAD_FAILED_ACTION_TYPE = 'USER_EDIT_PAGE_LOAD_FAILED_ACTION_TYPE';
export const userEditPageLoadFailedAction = payload => {
    return {
        type: USER_EDIT_PAGE_LOAD_FAILED_ACTION_TYPE,
        payload,
    };
};

export const USER_EDIT_PAGE_RESET_ACTION_TYPE = 'USER_EDIT_PAGE_RESET_ACTION_TYPE';
export const userEditPageResetAction = () => {
    return {
        type: USER_EDIT_PAGE_RESET_ACTION_TYPE,
    };
};

export const USER_EDIT_PAGE_SAVE_ACTION_TYPE = 'USER_EDIT_PAGE_SAVE_ACTION_TYPE';
export const userEditPageSaveAction = (payload, meta) => {
    return {
        type: USER_EDIT_PAGE_SAVE_ACTION_TYPE,
        payload,
        meta,
    };
};

export const USER_EDIT_PAGE_SAVE_SUCCEEDED_ACTION_TYPE = 'USER_EDIT_PAGE_SAVE_SUCCEEDED_ACTION_TYPE';
export const userEditPageSaveSucceededAction = payload => {
    return {
        type: USER_EDIT_PAGE_SAVE_SUCCEEDED_ACTION_TYPE,
        payload,
    };
};

export const USER_EDIT_PAGE_SAVE_FAILED_ACTION_TYPE = 'USER_EDIT_PAGE_SAVE_FAILED_ACTION_TYPE';
export const userEditPageSaveFailedAction = payload => {
    return {
        type: USER_EDIT_PAGE_SAVE_FAILED_ACTION_TYPE,
        payload,
    };
};
