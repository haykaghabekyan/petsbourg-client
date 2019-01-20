import { from, of } from 'rxjs';
import { filter, mergeMap, map, catchError } from 'rxjs/operators';
import { SIGN_UP_PAGE_SIGN_UP_ACTION } from './sign-up.actions';
import { SignUpService } from '../services/sign-up.service';
import { setAuthAction } from '../../../app/model/auth/auth.actions';

export const signUpEpic = action$ => {
    return action$.pipe(
        filter(action => action.type === SIGN_UP_PAGE_SIGN_UP_ACTION),
        mergeMap((action) => {
            const promise = SignUpService.signUp(action.payload);

            return from(promise)
                .pipe(
                    map(result => {
                        if (action.meta && action.meta.resolve) {
                            action.meta.resolve(result.user);
                        }

                        return setAuthAction(result.user);
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
