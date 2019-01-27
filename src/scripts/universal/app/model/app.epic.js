import { combineEpics } from 'redux-observable';
import { loadHomePageEpic } from '../../pages/home';
import { loadUserPageEpic } from '../../pages/user';
import { signInEpic } from '../../pages/sign-in';
import { signUpEpic } from '../../pages/sign-up';
import { petPageLoadEpic } from '../../pages/pet';
import { petEditPageLoadEpic, petEditPageUpdateEpic } from '../../pages/pet-edit';

export const combinedEpics = combineEpics(
    signInEpic,
    signUpEpic,
    loadHomePageEpic,
    loadUserPageEpic,
    petPageLoadEpic,
    petEditPageLoadEpic,
    petEditPageUpdateEpic,
);
