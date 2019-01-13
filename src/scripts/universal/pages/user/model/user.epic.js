import { from, of } from 'rxjs';
import { filter, mergeMap, map, catchError } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { USER_PAGE_LOAD_ACTION_TYPE, userPageLoadSucceededAction, userPageLoadFailedAction } from './user.actions';

export const loadUserPageEpic = action$ => {
    return action$.pipe(
        filter(action => action.type === USER_PAGE_LOAD_ACTION_TYPE),
        mergeMap((action) => {
            const { userId } = action.payload;
            const promise = UserService.loadUserPage(userId);

            return from(promise)
                .pipe(
                    map(result => {
                        const { profile, pets } = result;

                        return userPageLoadSucceededAction({ profile, pets });
                    }),
                    catchError(error => {
                        return of(userPageLoadFailedAction(error.message));
                    })
                );
        })
    );
};
