export const USER_EDIT_PAGE_LOAD_ACTION_TYPE = 'USER_EDIT_PAGE_LOAD_ACTION_TYPE';
export const userEditPageLoadAction = params => {
    return {
        type: USER_EDIT_PAGE_LOAD_ACTION_TYPE,
        payload: params,
    };
};

export const USER_EDIT_PAGE_RESET_ACTION_TYPE = 'USER_EDIT_PAGE_RESET_ACTION_TYPE';
export const userEditPageResetAction = () => {
    return {
        type: USER_EDIT_PAGE_RESET_ACTION_TYPE,
    };
};
