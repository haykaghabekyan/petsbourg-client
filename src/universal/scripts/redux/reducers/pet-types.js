import preloadedStae from "../preloaded-state";

const INITIAL_STATE = {
    ...preloadedStae.petTypes,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
