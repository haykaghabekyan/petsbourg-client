import * as React from "react";

const Card = ({ user }) => {
    return (
        <div className="profile-card-container">
            <div className="profile-card-content">
                <div className="avatar-container">
                    {/*<img src="" alt=""/>*/}
                    <div className="profile-card-avatar" />
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