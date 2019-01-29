import { from, of } from 'rxjs';
import { filter, mergeMap, map, catchError } from 'rxjs/operators';
import { HOME_PAGE_LOAD_ACTION_TYPE, homePageLoadSucceededAction, homePageLoadFailedAction } from './home.actions';

export const loadHomePageEpic = action$ => {
    return action$.pipe(
        filter(action => action.type === HOME_PAGE_LOAD_ACTION_TYPE),
        mergeMap(() => {
            // TODO
            const promise = new Promise((resolve => {
                resolve();
            }));

            return from(promise)
                .pipe(
                    map(result => {
                        return homePageLoadSucceededAction(result);
                    }),
                    catchError(error => of(homePageLoadFailedAction(error.message)))
                );
        })
    );
};
