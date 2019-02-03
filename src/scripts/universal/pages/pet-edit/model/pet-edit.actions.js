export const PET_EDIT_PAGE_LOAD_ACTION_TYPE = 'PET_EDIT_PAGE_LOAD_ACTION_TYPE';
export const petEditPageLoadAction = payload => {
    return {
        type: PET_EDIT_PAGE_LOAD_ACTION_TYPE,
        payload,
    };
};

export const PET_EDIT_PAGE_LOAD_SUCCEEDED_ACTION_TYPE = 'PET_EDIT_PAGE_LOAD_SUCCEEDED_ACTION_TYPE';
export const petEditPageLoadSucceededAction = payload => {
    return {
        type: PET_EDIT_PAGE_LOAD_SUCCEEDED_ACTION_TYPE,
        payload,
    };
};

export const PET_EDIT_PAGE_LOAD_FAILED_ACTION_TYPE = 'PET_EDIT_PAGE_LOAD_FAILED_ACTION_TYPE';
export const petEditPageLoadFailedAction = payload => {
    return {
        type: PET_EDIT_PAGE_LOAD_FAILED_ACTION_TYPE,
        payload,
    };
};

export const PET_EDIT_PAGE_RESET_ACTION_TYPE = 'PET_EDIT_PAGE_RESET_ACTION_TYPE';
export const petEditPageResetAction = () => {
    return {
        type: PET_EDIT_PAGE_RESET_ACTION_TYPE,
    };
};

export const PET_EDIT_PAGE_UPDATE_ACTION = 'PET_EDIT_PAGE_UPDATE_ACTION';
export const petEditPageUpdateAction = (payload, meta) => {
    return {
        type: PET_EDIT_PAGE_UPDATE_ACTION,
        payload,
        meta,
    };
};

export const PET_EDIT_PAGE_UPDATE_SUCCEEDED_ACTION = 'PET_EDIT_PAGE_UPDATE_SUCCEEDED_ACTION';
export const petEditPageUpdateSucceededAction = payload => {
    return {
        type: PET_EDIT_PAGE_UPDATE_SUCCEEDED_ACTION,
        payload,
    };
};

export const PET_EDIT_PAGE_UPDATE_FAILED_ACTION = 'PET_EDIT_PAGE_UPDATE_FAILED_ACTION';
export const petEditPageUpdateFailedAction = payload => {
    return {
        type: PET_EDIT_PAGE_UPDATE_FAILED_ACTION,
        payload,
    };
};

