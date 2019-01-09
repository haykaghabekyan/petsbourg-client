export const SET_ME_ACTION = 'SET_ME_ACTION';
export const setMeAction = user => {
    return {
        type: SET_ME_ACTION,
        payload: user,
    };
};
