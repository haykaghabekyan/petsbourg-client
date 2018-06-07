import React from "react";
import { Redirect } from "react-router-dom";

import MainLayout from "../components/layouts/main";

import HomeContainer from "../components/home/home-container";
import Home from "../components/home/home";

import ProfileContainer from "../components/profile/profile-container";

import AddPetContainer from "../components/pets/add-pet-container";

import SearchResultsContainer from "../components/search/search-results-container";

import PetProfileContainer from "../components/pets/pet-profile/pet-profile-container";

import NotFound from "../components/error/not-found";

const protectedRoutes = [{
    path: "/",
    component: MainLayout,
    exact: true,
    routes: [{
        path: "/",
        component: HomeContainer,
        routes: [{
            path: "/",
            component: Home
        }]
    }]
}, {
    path: "/pets/add",
    component: MainLayout,
    exact: true,
    routes: [{
        path: "/pets/add",
        component: AddPetContainer
    }]
}, {
    path: "/settings",
    component: MainLayout,
    exact: true,
    routes: [{
        path: "/settings",
        component: () => <div>Settings</div>,
    }]
}, {
    path: "/search",
    component: MainLayout,
    exact: true,
    routes: [{
        path: "/search",
        component: SearchResultsContainer
    }]
}, {
    path: "/sign-up",
    component: () => <Redirect to="/" />
}, {
    path: "/:userId",
    component: MainLayout,
    exact: true,
    routes: [{
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
    component: MainLayout,
    routes: [{
        path: "**",
        component: NotFound
    }]
}];

export default protectedRoutes;
