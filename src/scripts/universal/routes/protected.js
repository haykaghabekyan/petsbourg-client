import React from "react";
import { Redirect } from "react-router-dom";

import MainLayout from "../components/layouts/main";

import HomeContainer from "../components/home/home-container";
import Home from "../components/home/home";

import Settings from "../components/settings";
import GeneralSettingsContainer from "../components/settings/general-settings-container";
import SecuritySettingsContainer from "../components/settings/security-settings-container";
import AddPetContainer from "../components/pets/add-pet-container";

import About from "../components/about";
import NotFound from "../components/error/not-found";

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
        path: "/:username",
        component: (props) => {
            console.log(props);

            return (
                <div>{ props.match.params.username }</div>
            );
        }
    }, {
        path: "**",
        component: NotFound
    }]
}];

export default protectedRoutes;