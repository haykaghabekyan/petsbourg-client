import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import sidebar from "./sidebar";
import auth from "./auth";
import posts from "./posts";
import pets from "./pets";

export default combineReducers({
    sidebar,
    auth,
    posts,
    pets,
    form: formReducer
});