import { from, of } from 'rxjs';
import { filter, mergeMap, map, catchError } from 'rxjs/operators';
import { UserEditService } from '../services/user-edit.service';
import { USER_EDIT_PAGE_LOAD_ACTION_TYPE, userEditPageLoadSucceededAction, userEditPageLoadFailedAction } from './user-edit.actions';

export const userEditPageLoadEpic = action$ => {
    return action$.pipe(
        filter(action => action.type === USER_EDIT_PAGE_LOAD_ACTION_TYPE),
        mergeMap((action) => {
            const { userId } = action.payload;
            const promise = UserEditService.loadUserEditPage(userId);

            return from(promise)
                .pipe(
                    map(result => {
                        const { user, pets } = result;

                        return userEditPageLoadSucceededAction({ user, pets });
                    }),
                    catchError(error => {
                        return of(userEditPageLoadFailedAction(error.message));
                    })
                );
        })
    );
};
