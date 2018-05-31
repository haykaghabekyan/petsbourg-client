import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import me from "./me";
import user from "./user";
import pet from "./pet";

export default combineReducers({
    me,
    user,
    pet,
    form: formReducer
});
