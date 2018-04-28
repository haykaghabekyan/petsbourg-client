import React from "react";
import {Link} from "react-router-dom";
import SignOutContainer from "../auth/sign-out-container";
import UserIcon from "../../utils/icons/user";

export const Header = () => {
    return (
        <div className="user-profile-avatar">
            <UserIcon width={12} />
        </div>
    );
};

export const Content = () => {
    return (
        <div>
            <div className="dropdown-list-container">
                <h4 className="dropdown-list-title">Your pets</h4>
                <ul className="dropdown-list">
                    <li className="dropdown-list-item">
                        <Link to="">Tom</Link>
                    </li>
                    <li className="dropdown-list-item">
                        <Link to="">Jerry</Link>
                    </li>
                </ul>
            </div>
            <div className="dropdown-list-container">
                <ul className="dropdown-list">
                    <li className="dropdown-list-item">
                        <Link to="">My Profile</Link>
                    </li>
                    <li className="dropdown-list-item">
                        <Link to="">Settings</Link>
                    </li>
                    <li className="dropdown-list-item">
                        <SignOutContainer />
                    </li>
                </ul>
            </div>
        </div>
    );
};