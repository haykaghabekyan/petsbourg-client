import axios from 'axios';
import { filter, map, mergeMap } from 'rxjs/operators';
import { setAuthUserAction, removeAuthSucceededAction, REMOVE_AUTH_ACTION } from './auth.actions';
import {
    USER_EDIT_PAGE_SAVE_SUCCEEDED_ACTION_TYPE
} from '../../../pages/user-edit';
import { configs } from '../../../../server/utils/config';
import { from } from 'rxjs';

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

export const authSignOutEpic = action$ => {
    return action$
        .pipe(
            filter(action => action.type === REMOVE_AUTH_ACTION),
            mergeMap(() => {
                const { frontend } = configs();

                const promise = axios.get(`${ frontend.url }/api/sign-out`);

                return from(promise).pipe(
                    map(() => {
                        return removeAuthSucceededAction();
                    })
                );
            })
        );
};
