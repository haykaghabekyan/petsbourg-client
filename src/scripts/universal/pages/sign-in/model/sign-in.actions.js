export const SIGN_IN_PAGE_SIGN_IN_ACTION = 'SIGN_IN_PAGE_SIGN_IN_ACTION';
export const signInPageSignInAction = (payload, meta) => {
    return {
        type: SIGN_IN_PAGE_SIGN_IN_ACTION,
        payload: payload,
        meta: meta,
    };
};
