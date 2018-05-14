import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import auth from "./auth";
import pets from "./pets";

export default combineReducers({
    auth,
    pets,
    form: formReducer
});
