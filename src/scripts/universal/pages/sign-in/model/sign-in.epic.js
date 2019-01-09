import { from, of } from 'rxjs';
import { filter, mergeMap, map, catchError } from 'rxjs/operators';
import { SIGN_IN_PAGE_SIGN_IN_ACTION, signInPageSignInFailedAction, signInPageSignInSucceededAction } from '../../sign-in';
import { SignInService } from '../services/sign-in.service';

export const signInEpic = action$ => {
    return action$.pipe(
        filter(action => action.type === SIGN_IN_PAGE_SIGN_IN_ACTION),
        mergeMap((action) => {
            const promise = new SignInService().signIn(action.payload);

            return from(promise)
                .pipe(
                    map(result => {
                        if (action.meta && action.meta.resolve) {
                            action.meta.resolve(result);
                        }

                        return signInPageSignInSucceededAction(result);
                    }),
                    catchError(error => {
                        if (action.meta && action.meta.reject) {
                            action.meta.reject(error);
                        }

                        return of(signInPageSignInFailedAction(error));
                    })
                );
        })
    );
};