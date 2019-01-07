import { from, of } from 'rxjs';
import { filter, mergeMap, map, catchError } from 'rxjs/operators';
import { INDEX_PAGE_LOAD_ACTION_TYPE, indexPageLoadSucceededAction, indexPageLoadFailedAction } from './index.actions';

export const loadIndexPageEpic = action$ => {
    return action$.pipe(
        filter(action => action.type === INDEX_PAGE_LOAD_ACTION_TYPE),
        mergeMap(() => {
            const promise = new Promise((resolve => {
                setTimeout(() => {
                    resolve('yahooo index');
                }, 2000);
            }));

            return from(promise)
                .pipe(
                    map(result => {
                        return indexPageLoadSucceededAction(result);
                    }),
                    catchError(error => of(indexPageLoadFailedAction(error.message)))
                );
        })
    );
};
