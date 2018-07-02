import React from "react";

import commonRoutes from "./common";
import AuthLayout from "../components/layouts/auth";
import SignIn from "../components/auth/sign-in-container";
import SignUp from "../components/auth/sign-up-container";

const publicRoutes = [{
    path: "/",
    exact: true,
    component: AuthLayout,
    routes: [{
        path: "/",
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
},
    ...commonRoutes,
];

export default publicRoutes;