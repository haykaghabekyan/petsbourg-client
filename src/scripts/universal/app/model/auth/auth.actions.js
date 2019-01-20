export const SET_AUTH_ACTION = 'SET_AUTH_ACTION';
export const setAuthAction = payload => {
    return {
        type: SET_AUTH_ACTION,
        payload: payload,
    };
};
