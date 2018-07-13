import React from "react";
import ProfileCard from "../users/user-profile/user-profile-card";
import PetsCard from "../pets/pets-card/pets-card";
import CreatePetProfileCat from "../../utils/banners/create-pet-profile-cat";

const   ProfileLayout = ({ children, user }) => {
    const { profile, pets } = user;
    return (
        <div className="main-layout-page home-container">
            <div className="main-left-sidebar">
                <ProfileCard user={ user } />
                <PetsCard pets={ pets } />
            </div>

            <div className="main-content">{ children }</div>

            <div className="main-right-sidebar">
                <CreatePetProfileCat />
            </div>
        </div>
    );
};

export default ProfileLayout;
