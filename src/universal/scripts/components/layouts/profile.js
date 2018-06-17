import React from "react";
import ProfileCard from "../users/user-profile/user-profile-card";
import PetsCard from "../pets/pets-card/pets-card";

class ProfileLayout extends React.Component {
    render () {
        const { children, user } = this.props;

        return (
            <div className="main-layout-page home-container">
                <div className="main-left-sidebar">
                    <ProfileCard user={ user } />
                    <PetsCard pets={ user.profile.Pets } />
                </div>

                <div className="main-content">{ children }</div>

                <div className="main-right-sidebar">
                    <div />
                    <div />
                    <div />
                </div>
            </div>
        );
    }
}

export default ProfileLayout;
