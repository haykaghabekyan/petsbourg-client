import { from, of } from 'rxjs';
import { filter, mergeMap, map, catchError } from 'rxjs/operators';
import { SearchService } from '../services/search.service';
import { SEARCH_PAGE_LOAD_ACTION_TYPE, searchPageLoadFailedAction, searchPageLoadSucceededAction } from './search.actions';

export const searchPageLoadEpic = action$ => {
    return action$.pipe(
        filter(action => action.type === SEARCH_PAGE_LOAD_ACTION_TYPE),
        mergeMap((action) => {
            const { filters } = action.payload;
            const promise = SearchService.search(filters);

            return from(promise)
                .pipe(
                    map(result => {
                        const { pets } = result;

                        return searchPageLoadSucceededAction({ pets });
                    }),
                    catchError(({ response }) => {
                        const { errors } = response.data;

                        return of(searchPageLoadFailedAction(errors.message));
                    })
                );
        })
    );
};
