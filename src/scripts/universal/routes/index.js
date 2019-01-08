import React from 'react';
import { observableFromStore } from '../utils/observable-from-store';
import { filter, map, take } from 'rxjs/operators';

import MainLayout from '../components/layouts/main';
import PetProfileContainer from '../components/pets/pet-profile/pet-profile-container';
import PetProfile from '../components/pets/pet-profile/pet-profile';
import UserProfileContainer from '../components/users/user-profile/user-profile-container';
import UserProfile from '../components/users/user-profile/user-profile';
import NotFound from '../components/error/not-found';
import { privateRoutes } from './private';
import { publicRoutes } from './public';

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
            component: MainLayout,
            exact: true,
            routes: [{
                component: UserProfileContainer,
                routes: [{
                    path: '/pets/:petId',
                    component: UserProfile,
                }]
            }],
            loadPage: (store) => {
                store.dispatch(indexPageLoadAction());

                return {
                    ready: observableFromStore(store).pipe(
                        map(state => !state.indexPage.isLoading),
                        filter(x => x === true),
                        take(1)
                    ),
                };
            }
        },
        {
            path: '/pets/:petId',
            exact: true,
            component: MainLayout,
            routes: [{
                path: '/pets/:petId',
                component: PetProfileContainer,
                routes: [{
                    path: '/pets/:petId',
                    component: PetProfile,
                }]
            }]
        },
        {
            path: '/about',
            component: () => <div>About</div>
        },
        {
            path: '**',
            component: MainLayout,
            routes: [{
                component: NotFound,
            }],
        }
    );

    return routes;
};