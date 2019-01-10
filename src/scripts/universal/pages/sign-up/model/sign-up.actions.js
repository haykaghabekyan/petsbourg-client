export const SIGN_UP_PAGE_SIGN_UP_ACTION = 'SIGN_UP_PAGE_SIGN_UP_ACTION';
export const signUpPageSignInAction = (data, meta) => {
    return {
        type: SIGN_UP_PAGE_SIGN_UP_ACTION,
        payload: data,
        meta: meta,
    };
};
