import { from, of } from 'rxjs';
import { filter, mergeMap, map, catchError } from 'rxjs/operators';
import { UserService } from '../../user/services/user.service';
import { UserEditService } from '../services/user-edit.service';
import {
    USER_EDIT_PAGE_LOAD_ACTION_TYPE, userEditPageLoadSucceededAction, userEditPageLoadFailedAction,
    USER_EDIT_PAGE_SAVE_ACTION_TYPE, userEditPageSaveSucceededAction, userEditPageSaveFailedAction,
} from './user-edit.actions';

export const userEditPageLoadEpic = action$ => {
    return action$.pipe(
        filter(action => action.type === USER_EDIT_PAGE_LOAD_ACTION_TYPE),
        mergeMap(action => {
            const { userId } = action.payload;
            const promise = UserService.loadUserPage(userId);

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

export const userEditPageSaveEpic = (action$, state$) => {
    return action$.pipe(
        filter(action => action.type === USER_EDIT_PAGE_SAVE_ACTION_TYPE),
        mergeMap(action => {
            console.log(state$.value.auth);
            const { auth } = state$.value;
            const promise = UserEditService.userEditPageSave(auth.user._id, action.payload);

            return from(promise)
                .pipe(
                    map((result) => {
                        return userEditPageSaveSucceededAction({
                            user: result.user
                        });
                    }),
                    catchError(error => {
                        return of(userEditPageSaveFailedAction(error.message));
                    })
                );
        })
    );
};
