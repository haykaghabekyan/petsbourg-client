import React from "react";

import MainLayout from "../components/layouts/main";
import PetProfileContainer from "../components/pets/pet-profile/pet-profile-container";
import UserProfile from "../components/pets/pet-profile/pet-profile";
import UserProfileContainer from "../components/users/user-profile/user-profile-container";
import NotFound from "../components/error/not-found";

const commonRoutes = [{
    path: "/users/:userId",
    component: MainLayout,
    exact: true,
    routes: [{
        component: UserProfileContainer,
    }]
}, {
    path: "/pets/:petId",
    exact: true,
    component: MainLayout,
    routes: [{
        path: "/pets/:petId",
        component: PetProfileContainer,
        routes: [{
            path: "/pets/:petId",
            component: UserProfile,
        }]
    }]
}, {
    path: "/about",
    component: () => <div>About</div>
}, {
    path: "**",
    component: NotFound,
}];

export default commonRoutes;
