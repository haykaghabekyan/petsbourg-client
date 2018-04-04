import {TOGGLE_SIDEBAR} from "../types";

export const toggleSidebar = (showSidebar: any) => {
    return {
        type: TOGGLE_SIDEBAR,
        showSidebar
    };
};