import { PRELOADED_STATE } from "../preloaded-state";

const INITIAL_STATE = {
    ...PRELOADED_STATE.petTypes,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
