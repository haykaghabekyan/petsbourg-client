import {TOGGLE_SIDEBAR} from "../types";

interface Sidebar {
    showSidebar: boolean
}

const INITIAL_STATE: Sidebar = {
    showSidebar: false
};

export default (state: Sidebar = INITIAL_STATE, action: any = []) => {
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            return {
                ...state, ...action.showSidebar
            };
        default:
            return state;
    }
}