import React from "react";
import { Redirect } from "react-router-dom";

import ProtectedProfileLayout from "../components/layouts/protected-profile";

import HomeContainer from "../components/home/home-container";
import Home from "../components/home/home";

import ProfileContainer from "../components/profile/profile-container";

import AddPetContainer from "../components/pets/add-pet-container";

import NotFound from "../components/error/not-found";

const protectedRoutes = [{
    path: "/",
    component: ProtectedProfileLayout,
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
    component: ProtectedProfileLayout,
    exact: true,
    routes: [{
        path: "/pets/add",
        component: AddPetContainer
    }]
}, {
    path: "/settings",
    component: ProtectedProfileLayout,
    exact: true,
    routes: [{
        path: "/settings",
        component: () => <div>Settings</div>,
    }]
}, {
    path: "/sign-up",
    component: () => <Redirect to="/" />
}, {
    path: "/:userId",
    component: ProtectedProfileLayout,
    exact: true,
    routes: [{
        component: ProfileContainer,
    }]
}, {
    path: "/:userId/:petId",
    exact: true,
    component: ProtectedProfileLayout,
    routes: [{
        path: "/:userId/:petId",
        component: (props) => <div>/:userId/:petId</div>
    }]
}, {
    path: "**",
    component: ProtectedProfileLayout,
    routes: [{
        path: "**",
        component: NotFound
    }]
}];

export default protectedRoutes;
