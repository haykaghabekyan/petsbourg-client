import React from "react";
import UserIcon from "../../utils/icons/user";

const Card = ({ user }) => {
    return (
        <div className="profile-card-container">
            <div className="profile-card-content">
                <div className="avatar-container">
                    <div className="profile-card-avatar">
                        <UserIcon width={18} />
                    </div>
                </div>
                <div className="profile-card-user">
                    <div className="profile-card-name">
                        <a href={"/"}>{user.firstName + " " + user.lastName}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;