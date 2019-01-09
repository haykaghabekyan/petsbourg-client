import React from 'react';
import { Redirect } from 'react-router-dom';
import { observableFromStore } from '../utils/observable-from-store';
import { filter, map, take } from 'rxjs/operators';
// import { MainLayout } from '../components/layouts/main';
// import AddPetContainer from '../components/pets/add-pet/add-pet-container';
// import SearchResultsContainer from '../components/search/search-results-container';
// import PetProfileContainer from '../components/pets/pet-profile/pet-profile-container';
// import EditPetContainer from '../components/pets/edit-pet/edit-pet-container';
// import EditUserContainer from '../components/users/edit-user/edit-user-container';

import { HomePage, homePageLoadAction, HomeComponent } from '../pages/home';

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
    // {
    //     path: '/pets/add',
    //     component: MainLayout,
    //     exact: true,
    //     routes: [{
    //         path: '/pets/add',
    //         component: AddPetContainer,
    //     }],
    // },
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
    // {
    //     path: '/search',
    //     component: MainLayout,
    //     exact: true,
    //     routes: [{
    //         path: '/search',
    //         component: SearchResultsContainer,
    //     }],
    // },
    {
        path: '/sign-up',
        component: () => <Redirect to='/' />
    },
];
