import { combineEpics } from 'redux-observable';
import { loadIndexPageEpic } from '../../pages/index';
import { loadHomePageEpic } from '../../pages/home';

export const combinedEpics = combineEpics(
    loadIndexPageEpic,
    loadHomePageEpic,
);
