import React from 'react';
import { observableFromStore } from '../utils/observable-from-store';
import { filter, map, take } from 'rxjs/operators';
// import { MainLayout } from '../components/layouts/main';
// import PetProfileContainer from '../components/pets/pet-profile/pet-profile-container';
// import PetProfile from '../components/pets/pet-profile/pet-profile';
// import NotFound from '../components/error/not-found';
// import UserProfileContainer from '../components/users/user-profile/user-profile-container';
// import UserProfile from '../components/users/user-profile/user-profile';
import { privateRoutes } from './private';
import { publicRoutes } from './public';
import { UserPage, userPageLoadAction } from '../pages/user';
import { PetPage, petPageLoadAction } from '../pages/pet';
import { ErrorPage, Error404 } from '../pages/error';

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
            // routes: [{
            //     component: UserProfileContainer,
            //     routes: [{
            //         path: '/pets/:petId',
            //         component: UserProfile,
            //     }]
            // }],
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
            // routes: [{
            //     path: '/pets/:petId',
            //     component: PetProfileContainer,
            //     routes: [{
            //         path: '/pets/:petId',
            //         component: PetProfile,
            //     }]
            // }]
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
        // {
        //     path: '/about',
        //     component: () => <div>About</div>
        // },
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