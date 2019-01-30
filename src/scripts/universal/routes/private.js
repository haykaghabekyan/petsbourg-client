import React from 'react';
import { Redirect } from 'react-router-dom';
import { observableFromStore } from '../utils/observable-from-store';
import { filter, map, take } from 'rxjs/operators';
import { HomePage, homePageLoadAction, HomeComponent } from '../pages/home';
import { PetEditPage } from '../pages/pet-edit';
import { UserEditPage } from '../pages/user-edit';
import { PetAddPage } from '../pages/pet-add';
import { SearchPage } from '../pages/search';

export const privateRoutes = [
    {
        path: '/',
        component: HomePage,
        exact: true,
        routes: [{
            path: '/',
            component: HomeComponent,
        }],
        loadPage: (store) => {
            store.dispatch(homePageLoadAction());

            return {
                ready: observableFromStore(store).pipe(
                    map(state => !state.homePage.isLoading),
                    filter(x => x === true),
                    take(1)
                ),
            };
        }
    },
    {
        path: '/pets/:petId/edit',
        component: PetEditPage,
        exact: true,
    },
    {
        path: '/users/:id/edit',
        component: UserEditPage,
        exact: true,
    },
    {
        path: '/pet/add',
        component: PetAddPage,
        exact: true,
    },
    {
        path: '/search',
        component: SearchPage,
        exact: true,
    },
    {
        path: '/sign-up',
        component: () => <Redirect to='/' />
    },
];
