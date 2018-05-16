import React from "react";
import {Link} from "react-router-dom";
import UserIcon from "../../utils/icons/user";

const Card = ({ profile }) => {
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
                        <Link to={ `/${ profile.id }` }>{profile.firstName + " " + profile.lastName}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;