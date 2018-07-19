import React from "react";
import ProfileCardLoading from "../users/user-profile/user-profile-card-loading";
import PetsCardLoading from "../pets/pets-card/pets-card-loading";
import CreatePetProfileCat from "../../utils/banners/create-pet-profile-cat";

const ProfileLoadingLayout = () => {
    return (
        <div className="main-layout-page home-container">
            <div className="main-left-sidebar">
                <ProfileCardLoading />
                <PetsCardLoading />
            </div>

            <div className="main-content">

            </div>

            <div className="main-right-sidebar">
                <CreatePetProfileCat />
            </div>
        </div>
    );
};

export default ProfileLoadingLayout;
