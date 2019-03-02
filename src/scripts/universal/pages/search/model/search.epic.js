import { from, of } from 'rxjs';
import { filter, mergeMap, map, catchError } from 'rxjs/operators';
import { SearchService } from '../services/search.service';
import { SEARCH_PAGE_LOAD_ACTION_TYPE, SEARCH_PAGE_SEARCH_ACTION_TYPE, searchPageLoadFailedAction, searchPageLoadSucceededAction } from './search.actions';

export const searchPageLoadEpic = action$ => {
    return action$.pipe(
        filter(action => (action.type === SEARCH_PAGE_LOAD_ACTION_TYPE || action.type === SEARCH_PAGE_SEARCH_ACTION_TYPE)),
        mergeMap((action) => {
            const { filters } = action.payload;
            let promise;
            if (action.type === SEARCH_PAGE_LOAD_ACTION_TYPE) {
                promise = SearchService.load(filters);
            } else {
                promise = SearchService.search(filters);
            }

            return from(promise)
                .pipe(
                    map(result => {
                        const { pets, petTypes, petBreeds } = result;

                        return searchPageLoadSucceededAction({ pets, petTypes, petBreeds });
                    }),
                    catchError(({ response }) => {
                        const { errors } = response.data;

                        return of(searchPageLoadFailedAction(errors.message));
                    })
                );
        })
    );
};
