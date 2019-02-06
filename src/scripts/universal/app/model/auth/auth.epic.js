import { filter, map } from 'rxjs/operators';
import { setAuthUserAction } from './auth.actions';
import {
    USER_EDIT_PAGE_SAVE_SUCCEEDED_ACTION_TYPE
} from '../../../pages/user-edit';

export const authUpdateUserEpic = action$ => {
    return action$
        .pipe(
            filter(action => action.type === USER_EDIT_PAGE_SAVE_SUCCEEDED_ACTION_TYPE),
            map(action => {
                const { user } = action.payload;

                return setAuthUserAction({ user });
            })
        );
};
