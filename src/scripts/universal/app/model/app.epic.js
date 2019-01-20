import { combineEpics } from 'redux-observable';
import { loadHomePageEpic } from '../../pages/home';
import { loadUserPageEpic } from '../../pages/user';
import { loadPetPageEpic } from '../../pages/pet';
import { signInEpic } from '../../pages/sign-in';
import { signUpEpic } from '../../pages/sign-up';

export const combinedEpics = combineEpics(
    loadHomePageEpic,
    loadUserPageEpic,
    loadPetPageEpic,
    signInEpic,
    signUpEpic,
);
