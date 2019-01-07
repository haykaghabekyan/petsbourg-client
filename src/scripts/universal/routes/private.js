import React from 'react';
import { Redirect } from 'react-router-dom';
import commonRoutes from './common';
import MainLayout from '../components/layouts/main';
import HomeContainer from '../components/home/home-container';
import Home from '../components/home/home';
import AddPetContainer from '../components/pets/add-pet/add-pet-container';
import SearchResultsContainer from '../components/search/search-results-container';
import PetProfileContainer from '../components/pets/pet-profile/pet-profile-container';
import EditPetContainer from '../components/pets/edit-pet/edit-pet-container';
import EditUserContainer from '../components/users/edit-user/edit-user-container';

export const privateRoutes = [{
    path: '/',
    component: MainLayout,
    exact: true,
    routes: [{
        path: '/',
        component: HomeContainer,
        routes: [{
            path: '/',
            component: Home,
        }],
    }],
}, {
    path: '/users/:id/edit',
    component: MainLayout,
    exact: true,
    routes: [{
        path: '/users/:id/edit',
        component: HomeContainer,
        routes: [{
            path: '/users/:id/edit',
            component: EditUserContainer,
        }],
    }],
}, {
    path: '/pets/add',
    component: MainLayout,
    exact: true,
    routes: [{
        path: '/pets/add',
        component: AddPetContainer,
    }],
},  {
    path: '/pets/:petId/edit',
    component: MainLayout,
    exact: true,
    routes: [{
        path: '/pets/:petId/edit',
        component: PetProfileContainer,
        routes: [{
            path: '/pets/:petId/edit',
            component: EditPetContainer,
        }],
    }],
}, {
    path: '/search',
    component: MainLayout,
    exact: true,
    routes: [{
        path: '/search',
        component: SearchResultsContainer,
    }],
}, {
    path: '/sign-up',
    component: () => <Redirect to='/' />
},
    ...commonRoutes,
];
