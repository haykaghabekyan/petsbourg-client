import React from "react";

const UserProfileCardLoading = () => {
    return (
        <div className="profile-card">
            <div className="profile-card--content">
                <div className="d-flex justify-center">
                    <div className="profile-card--avatar loading d-flex justify-center align-center" />
                </div>
                <div className="profile-card--user">
                    <div className="profile-card--name loading">&nbsp;</div>
                </div>
            </div>
        </div>
    );
};

export default UserProfileCardLoading;
