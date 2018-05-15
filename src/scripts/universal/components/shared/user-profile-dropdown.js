import React from "react";
import {connect} from "react-redux";
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

const ContentComponent = ({ pets }) => {
    return (
        <div>
            <div className="dropdown-list-container">
                <h4 className="dropdown-list-title">Your pets</h4>
                <ul className="dropdown-list">
                    {
                        pets && pets.map((pet, key) => {
                            return (
                                <li className="dropdown-list-item" key={key}>
                                    <Link to="">{ pet.name }</Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
            <div className="dropdown-list-container">
                <ul className="dropdown-list">
                    <li className="dropdown-list-item">
                        <Link to="/pets/add">Add pet</Link>
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

const mapStateToProps = state => {
    return {
        pets: state.me.pets,
    };
};

export const Content = connect(mapStateToProps)(ContentComponent);