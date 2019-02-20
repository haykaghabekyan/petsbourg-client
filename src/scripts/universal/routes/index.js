import React from 'react';
import { observableFromStore } from '../utils/observable-from-store';
import { filter, map, take } from 'rxjs/operators';
import { privateRoutes } from './private';
import { publicRoutes } from './public';
import { UserPage, userPageLoadAction } from '../pages/user';
import { PetPage, petPageLoadAction } from '../pages/pet';
import { ErrorPage, Error404 } from '../pages/error';
import { ForgotPasswordPage } from '../pages/forgot-password';

export const getRoutes = (isAuthenticated = false) => {
    const routes = [];

    if (isAuthenticated) {
        routes.push(...privateRoutes);
    } else {
        routes.push(...publicRoutes);
    }

    routes.push(
        {
            path: '/users/:userId',
            component: UserPage,
            exact: true,
            loadPage: (store, params) => {
                store.dispatch(userPageLoadAction(params));

                return {
                    ready: observableFromStore(store).pipe(
                        map(state => !state.userPage.isLoading),
                        filter(x => x === true),
                        take(1)
                    ),
                };
            }
        },
        {
            path: '/pets/:petId',
            component: PetPage,
            exact: true,
            loadPage: (store, params) => {
                store.dispatch(petPageLoadAction(params));

                return {
                    ready: observableFromStore(store).pipe(
                        map(state => !state.petPage.isLoading),
                        filter(x => x === true),
                        take(1)
                    ),
                };
            }
        },
        {
            path: '**',
            component: ErrorPage,
            routes: [{
                component: Error404,
            }]
        }
    );

    return routes;
};