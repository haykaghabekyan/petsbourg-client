import { combineEpics } from 'redux-observable';
import { homePageLoadEpic } from '../../pages/home';
import { userPageLoadEpic } from '../../pages/user';
import { userEditPageLoadEpic } from '../../pages/user-edit';
import { signInEpic } from '../../pages/sign-in';
import { signUpEpic } from '../../pages/sign-up';
import { petPageLoadEpic } from '../../pages/pet';
import { petEditPageLoadEpic, petEditPageUpdateEpic } from '../../pages/pet-edit';
import { petAddPageLoadEpic, petAddPageLoadBreedsEpic, petAddPageSaveEpic } from '../../pages/pet-add';

export const combinedEpics = combineEpics(
    signInEpic,
    signUpEpic,
    homePageLoadEpic,
    userPageLoadEpic,
    userEditPageLoadEpic,
    petPageLoadEpic,
    petEditPageLoadEpic,
    petEditPageUpdateEpic,
    petAddPageLoadEpic,
    petAddPageLoadBreedsEpic,
    petAddPageSaveEpic,
);
