import React from "react";
import { Redirect } from "react-router-dom";

import AuthLayout from "../components/layouts/auth";
import MainLayout from "../components/layouts/main";

import SignIn from "../components/auth/sign-in-container";
import SignUp from "../components/auth/sign-up-container";

import ProfileContainer from "../components/profile/profile-container";
import About from "../components/about";
import NotFound from "../components/error/not-found";

import PetProfileContainer from "../components/pets/pet-profile/pet-profile-container";

const publicRoutes = [{
    path: "/",
    exact: true,
    component: AuthLayout,
    routes: [{
        path: "/",
        component: SignIn
    }]
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
    path: "/about",
    component: AuthLayout,
    exact: true,
    routes: [{
        path: "/about",
        component: About
    }]
}, {
    path: "/settings",
    component: () => <Redirect to="/" />
}, {
    path: "/search",
    component: MainLayout,
    exact: true,
    routes: [{
        path: "/search",
        component: NotFound,
    }]
}, {
    path: "/:userId",
    exact: true,
    component: MainLayout,
    routes: [{
        path: "/:userId",
        component: ProfileContainer,
    }]
}, {
    path: "/:userId/:petId",
    exact: true,
    component: MainLayout,
    routes: [{
        path: "/:userId/:petId",
        component: ProfileContainer,
        routes: [{
            path: "/:userId/:petId",
            component: PetProfileContainer
        }],
    }]
}, {
    path: "**",
    component: NotFound,
}];

export default publicRoutes;