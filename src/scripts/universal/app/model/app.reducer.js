import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { authReducer } from './auth/auth.reducer';
import { signInPageReducer } from '../../pages/sign-in';
import { signUpPageReducer } from '../../pages/sign-up';
import { homePageReducer } from '../../pages/home';
import { userPageReducer } from '../../pages/user';
import { petPageReducer } from '../../pages/pet';
import { petEditPageReducer } from '../../pages/pet-edit';
import { searchPageReducer } from '../../pages/search';

export const combinedReducers = combineReducers({
    form: formReducer,
    auth: authReducer,
    signInPage: signInPageReducer,
    signUpPage: signUpPageReducer,
    homePage: homePageReducer,
    userPage: userPageReducer,
    petPage: petPageReducer,
    petEditPage: petEditPageReducer,
    searchPage: searchPageReducer,
});
