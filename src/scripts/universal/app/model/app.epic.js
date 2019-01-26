import { combineEpics } from 'redux-observable';
import { loadHomePageEpic } from '../../pages/home';
import { loadUserPageEpic } from '../../pages/user';
import { signInEpic } from '../../pages/sign-in';
import { signUpEpic } from '../../pages/sign-up';
import { loadPetPageEpic } from '../../pages/pet';
import { loadPetEditPageEpic } from '../../pages/pet-edit';

export const combinedEpics = combineEpics(
    signInEpic,
    signUpEpic,
    loadHomePageEpic,
    loadUserPageEpic,
    loadPetPageEpic,
    loadPetEditPageEpic,
);
