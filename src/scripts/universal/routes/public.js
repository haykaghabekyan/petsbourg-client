import React from 'react';

import commonRoutes from './common';
import MainLayout from '../components/layouts/main';
import AuthLayout from '../components/layouts/auth';
import SignIn from '../components/auth/sign-in-container';
import SignUp from '../components/auth/sign-up-container';
import NotFound from '../components/error/not-found';

export const publicRoutes = [{
    path: '/',
    exact: true,
    component: AuthLayout,
    routes: [{
        path: '/',
        component: SignIn,
    }],
}, {
    showSignIn: true,
    path: '/sign-up',
    exact: true,
    component: AuthLayout,
    routes: [{
        path: '/sign-up',
        component: SignUp,
    }],
}, {
    path: '/pets/add',
    component: MainLayout,
    routes: [{
        component: NotFound,
    }],
},
    ...commonRoutes,
];
