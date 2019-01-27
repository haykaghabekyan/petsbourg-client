import React from 'react';
import { Redirect } from 'react-router-dom';
import { observableFromStore } from '../utils/observable-from-store';
import { filter, map, take } from 'rxjs/operators';
import { HomePage, homePageLoadAction, HomeComponent } from '../pages/home';
import { PetEditPage, petEditPageLoadAction } from '../pages/pet-edit';
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
        loadPage: (store, params) => {
            store.dispatch(petEditPageLoadAction(params));

            return {
                ready: observableFromStore(store).pipe(
                    map(state => !state.petEditPage.isLoading),
                    filter(x => x === true),
                    take(1)
                ),
            };
        }
    },
    // {
    //     path: '/users/:id/edit',
    //     component: MainLayout,
    //     exact: true,
    //     routes: [{
    //         path: '/users/:id/edit',
    //         component: HomeContainer,
    //         routes: [{
    //             path: '/users/:id/edit',
    //             component: EditUserContainer,
    //         }],
    //     }],
    // },
    {
        path: '/pet/add',
        component: PetAddPage,
        exact: true,
    },
    // {
    //     path: '/pets/:petId/edit',
    //     component: MainLayout,
    //     exact: true,
    //     routes: [{
    //         path: '/pets/:petId/edit',
    //         component: PetProfileContainer,
    //         routes: [{
    //             path: '/pets/:petId/edit',
    //             component: EditPetContainer,
    //         }],
    //     }],
    // },
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
