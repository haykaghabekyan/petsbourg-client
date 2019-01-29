export const PET_ADD_PAGE_LOAD_ACTION = 'PET_ADD_PAGE_LOAD_ACTION';
export const petAddPageLoadAction = () => {
    return {
        type: PET_ADD_PAGE_LOAD_ACTION,
    };
};

export const PET_ADD_PAGE_LOAD_SUCCEEDED_ACTION = 'PET_ADD_PAGE_LOAD_SUCCEEDED_ACTION';
export const petAddPageLoadSucceededAction = payload => {
    return {
        type: PET_ADD_PAGE_LOAD_SUCCEEDED_ACTION,
        payload,
    };
};

export const PET_ADD_PAGE_LOAD_FAILED_ACTION = 'PET_ADD_PAGE_LOAD_FAILED_ACTION';
export const petAddPageLoadFailedAction = payload => {
    return {
        type: PET_ADD_PAGE_LOAD_FAILED_ACTION,
        payload,
    };
};

export const PET_ADD_PAGE_SAVE_ACTION = 'PET_ADD_PAGE_SAVE_ACTION';
export const petAddPageSaveAction = (payload, meta) => {
    return {
        type: PET_ADD_PAGE_SAVE_ACTION,
        payload: payload,
        meta: meta,
    };
};

export const PET_ADD_PAGE_SAVE_SUCCEEDED_ACTION = 'PET_ADD_PAGE_SAVE_SUCCEEDED_ACTION';
export const petAddPageSaveSucceededAction = payload => {
    return {
        type: PET_ADD_PAGE_SAVE_SUCCEEDED_ACTION,
        payload: payload,
    };
};

export const PET_ADD_PAGE_SAVE_FAILED_ACTION = 'PET_ADD_PAGE_SAVE_FAILED_ACTION';
export const petAddPageSaveFailedAction = payload => {
    return {
        type: PET_ADD_PAGE_SAVE_FAILED_ACTION,
        payload: payload,
    };
};

export const PET_ADD_PAGE_LOAD_BREEDS_ACTION = 'PET_ADD_PAGE_LOAD_BREEDS_ACTION';
export const petAddPageLoadBreedsAction = petType => {
    return {
        type: PET_ADD_PAGE_LOAD_BREEDS_ACTION,
        petType,
    };
};

export const PET_ADD_PAGE_LOAD_BREEDS_SUCCEEDED_ACTION = 'PET_ADD_PAGE_LOAD_BREEDS_SUCCEEDED_ACTION';
export const petAddPageLoadBreedsSuccededAction = payload => {
    return {
        type: PET_ADD_PAGE_LOAD_BREEDS_SUCCEEDED_ACTION,
        payload,
    };
};

export const PET_ADD_PAGE_LOAD_BREEDS_FAILED_ACTION = 'PET_ADD_PAGE_LOAD_BREEDS_FAILED_ACTION';
export const petAddPageLoadBreedsFailedAction = payload => {
    return {
        type: PET_ADD_PAGE_LOAD_BREEDS_FAILED_ACTION,
        payload,
    };
};

