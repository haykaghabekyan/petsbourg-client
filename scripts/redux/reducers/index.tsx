import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import auth from "./auth";
import posts from "./posts";
import pets from "./pets";

export default combineReducers({
    auth,
    posts,
    pets,
    form: formReducer
});
