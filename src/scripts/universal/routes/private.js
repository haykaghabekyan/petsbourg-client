import React from 'react';
import { Redirect } from 'react-router-dom';
import { HomePage } from '../pages/home';
import { PetEditPage } from '../pages/pet-edit';
import { UserEditPage } from '../pages/user-edit';
import { PetAddPage } from '../pages/pet-add';
import { SearchPage } from '../pages/search';

export const privateRoutes = [
    {
        path: '/',
        component: HomePage,
        exact: true,
    },
    {
        path: '/pets/:petId/edit',
        component: PetEditPage,
        exact: true,
    },
    {
        path: '/users/:userId/edit',
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
