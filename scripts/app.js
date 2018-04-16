import * as React from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import AuthLayout from "./components/layouts/auth";
import MainLayout from "./components/layouts/main";

import SignIn from "./components/auth/sign-in-container";
import SignUp from "./components/auth/sign-up-container";

import HomeContainer from "./components/home/home-container";
import Home from "./components/home/home";
import About from "./components/about";
import NotFound from "./components/error/not-found";
import Settings from "./components/settings";
import GeneralSettingsContainer from "./components/settings/general-settings-container";
import SecuritySettingsContainer from "./components/settings/security-settings-container";
import AddPetContainer from "./components/pets/add-pet-container";

const protectedRoutes = [{
    component: MainLayout,
    routes: [{
        path: "/",
        exact: true,
        component: HomeContainer,
        routes: [{
            path: "/",
            component: Home
        }]
    }, {
        path: "/pets",
        exact: true,
        component: Home,
        routes: [{
            path: "/pets",
            component: () => (<div>/pets/</div>)
        }]
    }, {
        path: "/pets/add",
        exact: true,
        component: AddPetContainer
    }, {
        path: "/pets/add/:petType",
        component: AddPetContainer
    }, {
        path: "/about",
        component: About
    }, {
        component: Settings,
        path: "/settings",
        exact: true,
        routes: [{
            path: "/settings",
            component: GeneralSettingsContainer
        }]
    }, {
        component: Settings,
        path: "/settings/security",
        routes: [{
            path: "/settings/security",
            component: SecuritySettingsContainer
        }]
    }, {
        path: "/sign-up",
        component: () => <Redirect to="/" />
    }, {
        path: "**",
        component: NotFound
    }]
}];

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

const App = ({ auth }) => {
    const routesToRender = auth.isAuthenticated ? protectedRoutes : publicRoutes;
    return renderRoutes(routesToRender);
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    };
};

export default withRouter(
    connect(mapStateToProps)(App)
);
