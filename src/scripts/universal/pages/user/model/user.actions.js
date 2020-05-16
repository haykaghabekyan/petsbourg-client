export const USER_PAGE_LOAD_ACTION_TYPE = 'USER_PAGE_LOAD_ACTION_TYPE';
export const userPageLoadAction = (params) => {
  return {
    type: USER_PAGE_LOAD_ACTION_TYPE,
    payload: params,
  };
};

export const USER_PAGE_LOAD_SUCCEEDED_ACTION_TYPE = 'USER_PAGE_LOAD_SUCCEEDED_ACTION_TYPE';
export const userPageLoadSucceededAction = data => {
  return {
    type: USER_PAGE_LOAD_SUCCEEDED_ACTION_TYPE,
    payload: data,
  };
};

export const USER_PAGE_LOAD_FAILED_ACTION_TYPE = 'USER_PAGE_LOAD_FAILED_ACTION_TYPE';
export const userPageLoadFailedAction = data => {
  return {
    type: USER_PAGE_LOAD_FAILED_ACTION_TYPE,
    payload: data,
  };
};

export const USER_PAGE_RESET_ACTION_TYPE = 'USER_PAGE_RESET_ACTION_TYPE';
export const userPageResetAction = () => {
  return {
    type: USER_PAGE_RESET_ACTION_TYPE,
  };
};

