import * as React from "react";

const Card = ({user}) => {
    return (
        <div className="profile-card">
            <div className="profile-card-header">

            </div>
            <div className="profile-card-content">
                <div className="d-flex">
                    <div className="profile-card-avatar">
                        <img src="" alt=""/>
                    </div>
                    <div className="profile-card-user">
                        <div className="profile-card-name">
                            <a href={"/" + user.username}>{user.firstName + " " + user.lastName}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;