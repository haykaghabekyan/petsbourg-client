import React from "react";
import { withRouter } from "react-router-dom";
import ProfileCard from "../../users/user-profile/user-profile-card";
import PetsCard from "../pets-card/pets-card";

class UserProfile extends React.Component {

    render () {
        const { user, match: { params: { petId } } } = this.props;

        return (
            <div className="main-layout-page home-container">
                <div className="main-left-sidebar">
                    <ProfileCard user={ user } />
                    <PetsCard pets={ user.profile.Pets } selectedPetId={ petId } />
                </div>

                <div className="main-content" />

                <div className="main-right-sidebar">
                    <div />
                    <div />
                    <div />
                </div>
            </div>
        );
    }
}

export default withRouter(UserProfile);
