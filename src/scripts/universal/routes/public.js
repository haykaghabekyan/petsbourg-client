import React from 'react';

import { SignInPage } from '../pages/sign-in';
import { SignUpPage } from '../pages/sign-up';

import MainLayout from '../components/layouts/main';
import NotFound from '../components/error/not-found';

export const publicRoutes = [
    {
        path: '/',
        exact: true,
        component: SignInPage,
    },
    {
        path: '/sign-up',
        exact: true,
        component: SignUpPage,
    },
    {
        path: '/pets/add',
        component: MainLayout,
        routes: [{
            component: NotFound,
        }],
    },
];
