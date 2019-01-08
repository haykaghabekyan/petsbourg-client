import { combineEpics } from 'redux-observable';
import { loadHomePageEpic } from '../../pages/home';

export const combinedEpics = combineEpics(
    loadHomePageEpic,
);
