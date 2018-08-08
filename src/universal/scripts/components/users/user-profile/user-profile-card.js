import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import UserIcon from "../../../utils/icons/common/user";
import PenIcon from "../../../utils/icons/common/pen";
import MessageIcon from "../../../utils/icons/common/message";
import PhoneIcon from "../../../utils/icons/common/phone";
import EnvelopeIcon from "../../../utils/icons/common/envelope";

import { circle } from "../../../utils/helpers/cloudinary";

const profilePicture = profile => {
    if(!profile || !profile.picture) {
        return <UserIcon width={ 18 } />;
    }

    return <img className="profile-card--picture" src={circle(profile.picture.publicId)} alt=""/>
};

const Card = ({ userProfile, me }) => {
    const { profile } = me;

    return (
        <div className="profile-card">
            {
                profile && profile._id === userProfile._id &&
                <Link to={`/users/${ profile._id }/edit`} className="profile-card--edit">
                    <PenIcon color="#E0E4E9" />
                </Link>
            }
            <div className="profile-card--content">
                <div className="d-flex justify-center">
                    <div className="profile-card--avatar d-flex justify-center align-center">
                        { profilePicture(userProfile) }
                    </div>
                </div>
                <div className="profile-card--user">
                    <div className="profile-card--name">
                        <Link to={ `/users/${ userProfile._id }` }>{userProfile.firstName + " " + userProfile.lastName}</Link>
                    </div>
                    {
                        userProfile && userProfile.biography &&
                        <div className="profile-card--biography">
                            { userProfile.biography }
                        </div>
                    }
                    {
                        profile && profile._id !== userProfile._id &&
                        <div className="profile-card--contacts">
                            <div>
                                <MessageIcon width={ 15 } />
                            </div>
                            <div>
                                <PhoneIcon width={ 12 } />
                            </div>
                            <div>
                                <EnvelopeIcon width={ 15 } />
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        me: state.me,
    };
};

export default connect(mapStateToProps)(Card);
