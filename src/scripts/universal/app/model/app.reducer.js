import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { meReducer } from './me/me.reducer';
import { signInPageReducer } from '../../pages/sign-in';
import { signUpPageReducer } from '../../pages/sign-up';
import { homePageReducer } from '../../pages/home';
import { userPageReducer } from '../../pages/user';

export const combinedReducers = combineReducers({
    form: formReducer,
    me: meReducer,
    signInPage: signInPageReducer,
    signUpPage: signUpPageReducer,
    homePage: homePageReducer,
    userPage: userPageReducer,
});
