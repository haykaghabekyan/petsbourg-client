import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { indexPageReducer } from '../../pages/index';
import { homePageReducer } from '../../pages/home';

export const combinedReducers = combineReducers({
    form: formReducer,
    indexPage: indexPageReducer,
    homePage: homePageReducer,
});
