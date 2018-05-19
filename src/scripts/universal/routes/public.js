import React from "react";
import { Redirect } from "react-router-dom";

import AuthLayout from "../components/layouts/auth";
import PublicProfileLayout from "../components/layouts/public-profile";

import SignIn from "../components/auth/sign-in-container";
import SignUp from "../components/auth/sign-up-container";

import ProfileContainer from "../components/profile/profile-container";
import About from "../components/about";
import NotFound from "../components/error/not-found";

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
    path: "/pets",
    component: () => <Redirect to="/" />
}, {
    path: "/settings",
    component: () => <Redirect to="/" />
}, {
    path: "/:userId",
    exact: true,
    component: PublicProfileLayout,
    routes: [{
        path: "/:userId",
        component: ProfileContainer,
    }]
}, {
    path: "/:userId/:petId",
    component: (props) => {
        console.log(props.match.params);

        return (
            <div>pet</div>
        );
    }
}, {
    path: "**",
    component: NotFound
}];

export default publicRoutes;