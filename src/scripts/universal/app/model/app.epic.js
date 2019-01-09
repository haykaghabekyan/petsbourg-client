import { combineEpics } from 'redux-observable';
import { loadHomePageEpic } from '../../pages/home';
import { signInEpic } from '../../pages/sign-in';

export const combinedEpics = combineEpics(
    loadHomePageEpic,
    signInEpic,
);
