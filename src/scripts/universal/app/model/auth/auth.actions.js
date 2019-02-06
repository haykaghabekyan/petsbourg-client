export const SET_AUTH_ACTION = 'SET_AUTH_ACTION';
export const setAuthAction = payload => {
    return {
        type: SET_AUTH_ACTION,
        payload,
    };
};

export const SET_AUTH_USER_ACTION = 'SET_AUTH_USER_ACTION';
export const setAuthUserAction = payload => {
    return {
        type: SET_AUTH_USER_ACTION,
        payload,
    };
};

export const REMOVE_AUTH_ACTION = 'REMOVE_AUTH_ACTION';
export const removeAuthAction = () => {
    return {
        type: REMOVE_AUTH_ACTION,
    };
};

export const REMOVE_AUTH_SUCCEEDED_ACTION = 'REMOVE_AUTH_SUCCEEDED_ACTION';
export const removeAuthSucceededAction = () => {
    return {
        type: REMOVE_AUTH_SUCCEEDED_ACTION,
    };
};
