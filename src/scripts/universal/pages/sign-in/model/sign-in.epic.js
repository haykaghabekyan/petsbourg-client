import { from, of } from 'rxjs';
import { filter, mergeMap, map, catchError } from 'rxjs/operators';
import { SIGN_IN_PAGE_SIGN_IN_ACTION } from '../../sign-in';
import { SignInService } from '../services/sign-in.service';
import { setAuthAction } from '../../../app/model/auth/auth.actions';

export const signInEpic = action$ => {
    return action$.pipe(
        filter(action => action.type === SIGN_IN_PAGE_SIGN_IN_ACTION),
        mergeMap((action) => {
            const promise = SignInService.signIn(action.payload);

            return from(promise)
                .pipe(
                    map(result => {
                        if (action.meta && action.meta.resolve) {
                            action.meta.resolve(result);
                        }

                        return setAuthAction(result);
                    }),
                    catchError(({ response: { data } }) => {
                        if (action.meta && action.meta.reject) {
                            action.meta.reject(data.errors);
                        }

                        return of();
                    })
                );
        })
    );
};
