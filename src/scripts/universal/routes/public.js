import React from 'react';
import { SignInPage } from '../pages/sign-in';
import { SignUpPage } from '../pages/sign-up';
import { ErrorPage, Error401 } from '../pages/error';

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
        path: '/pet/add',
        component: ErrorPage,
        exact: true,
        routes: [{
            component: Error401,
        }],
    },
    {
        path: '/pets/:petId/edit',
        component: ErrorPage,
        exact: true,
        routes: [{
            component: Error401,
        }],
    }
];
