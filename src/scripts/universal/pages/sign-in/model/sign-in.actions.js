export const SIGN_IN_PAGE_SIGN_IN_ACTION = 'SIGN_IN_PAGE_SIGN_IN_ACTION';
export const signInPageSignInAction = (data, meta) => {
    return {
        type: SIGN_IN_PAGE_SIGN_IN_ACTION,
        payload: data,
        meta: meta,
    };
};

export const SIGN_IN_PAGE_SIGN_IN_SUCCEEDED_ACTION = 'SIGN_IN_PAGE_SIGN_IN_SUCCEEDED_ACTION';
export const signInPageSignInSucceededAction = (data) => {
    return {
        type: SIGN_IN_PAGE_SIGN_IN_SUCCEEDED_ACTION,
        payload: data,
    };
};

export const SIGN_IN_PAGE_SIGN_IN_FAILED_ACTION = 'SIGN_IN_PAGE_SIGN_IN_FAILED_ACTION';
export const signInPageSignInFailedAction = (data) => {
    return {
        type: SIGN_IN_PAGE_SIGN_IN_FAILED_ACTION,
        payload: data,
    };
};