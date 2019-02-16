import { combineEpics } from 'redux-observable';
import { authUpdateUserEpic, authSignOutEpic } from './auth/auth.epic';
import { homePageLoadEpic } from '../../pages/home';
import { userPageLoadEpic } from '../../pages/user';
import { userEditPageLoadEpic } from '../../pages/user-edit';
import { signInEpic } from '../../pages/sign-in';
import { signUpEpic } from '../../pages/sign-up';
import { petPageLoadEpic } from '../../pages/pet';
import { petEditPageLoadEpic, petEditPageUpdateEpic, petEditPageUpdatePetsListEpic } from '../../pages/pet-edit';
import { userEditPageSaveEpic } from '../../pages/user-edit';
import { petAddPageLoadEpic, petAddPageLoadBreedsEpic, petAddPageSaveEpic } from '../../pages/pet-add';
import { searchPageLoadEpic } from '../../pages/search';

export const combinedEpics = combineEpics(
    authUpdateUserEpic,
    authSignOutEpic,
    signInEpic,
    signUpEpic,
    homePageLoadEpic,
    userPageLoadEpic,
    userEditPageLoadEpic,
    userEditPageSaveEpic,
    petPageLoadEpic,
    petEditPageLoadEpic,
    petEditPageUpdateEpic,
    petEditPageUpdatePetsListEpic,
    petAddPageLoadEpic,
    petAddPageLoadBreedsEpic,
    petAddPageSaveEpic,
    searchPageLoadEpic,
);
