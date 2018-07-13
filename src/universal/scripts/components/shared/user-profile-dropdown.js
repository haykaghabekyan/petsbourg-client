import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SignOutContainer from "../auth/sign-out-container";
import UserIcon from "../../utils/icons/common/user";

export const Header = () => {
    return (
        <div className="user-profile-avatar">
            <UserIcon width={ 12 } color="#ffffff" />
        </div>
    );
};

const ContentComponent = ({ me }) => {
    const { profile, pets } = me;

    return (
        <div>
            <div className="dropdown-list-container">
                <h4 className="dropdown-list-title">Your pets</h4>
                <ul className="dropdown-list">
                    {
                        pets.map((pet, key) => {
                            return (
                                <li className="dropdown-list-item" key={key}>
                                    <Link to={`/pets/${ pet._id }`}>{ pet.name }</Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
            <div className="dropdown-list-container">
                <ul className="dropdown-list">
                    <li className="dropdown-list-item">
                        <Link to={ `/pets/add` }>Add pet</Link>
                    </li>
                </ul>
            </div>
            <div className="dropdown-list-container">
                <ul className="dropdown-list">
                    <li className="dropdown-list-item">
                        <Link to={ `/users/${ profile._id }` }>My profile</Link>
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
        me: state.me,
    };
};

export const Content = connect(mapStateToProps)(ContentComponent);
