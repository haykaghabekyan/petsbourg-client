import React from "react";
import { Redirect } from "react-router-dom";

import AuthLayout from "../components/layouts/auth";

import SignIn from "../components/auth/sign-in-container";
import SignUp from "../components/auth/sign-up-container";

import About from "../components/about";
import NotFound from "../components/error/not-found";

const publicRoutes = [{
    path: '/',
    exact: true,
    component: AuthLayout,
    routes: [{
        path: '/',
        component: SignIn
    }]
}, {
    path: "/pets",
    component: () => <Redirect to="/" />
}, {
    showSignIn: true,
    path: '/sign-up',
    exact: true,
    component: AuthLayout,
    routes: [{
        path: '/sign-up',
        component: SignUp
    }]
}, {
    path: '/about',
    component: AuthLayout,
    exact: true,
    routes: [{
        path: '/about',
        component: About
    }]
}, {
    path: "**",
    component: NotFound
}];

export default publicRoutes;