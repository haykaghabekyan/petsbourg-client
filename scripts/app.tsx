import * as React from "react";
import { connect } from "react-redux";
import { renderRoutes } from "react-router-config";
import { withRouter, Redirect } from "react-router";

import AuthLayout from "./components/layouts/auth";
import MainLayout from "./components/layouts/main";

import SignIn from "./containers/auth/sign-in-container";
import SignUp from "./containers/auth/sign-up-container";

import Home from "./components/home";
import About from "./components/about";
import NotFound from "./components/error/not-found";
import Settings from "./components/settings";
import GeneralSettingsContainer from "./containers/settings/general-settings-container";
import SecuritySettingsContainer from "./containers/settings/security-settings-container";
import AddPetContainer from "./components/pets/add-pet-container";
import PostsListContainer from "./containers/posts/posts-list-container";

const protectedRoutes = [{
    component: MainLayout,
    routes: [{
        path: "/",
        exact: true,
        component: Home,
        routes: [{
            path: "/",
            component: PostsListContainer
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
        component: AddPetContainer,
        routes: [{
            path: "/pets/add",
            component: AddPetContainer
        }]
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
    connect(mapStateToProps)(App) as React.ComponentClass<any>
);
