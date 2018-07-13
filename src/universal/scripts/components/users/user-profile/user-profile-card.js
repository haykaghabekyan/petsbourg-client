import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import UserIcon from "../../../utils/icons/common/user";
import PenIcon from "../../../utils/icons/common/pen";
import MessageIcon from "../../../utils/icons/common/message";
import PhoneIcon from "../../../utils/icons/common/phone";
import EnvelopeIcon from "../../../utils/icons/common/envelope";

const Card = ({ user, me }) => {
    return (
        <div className="profile-card">
            {
                me.profile && user.profile && me.profile._id === user.profile._id &&
                <Link to={`/users/${ me.profile._id }/edit`} className="profile-card__edit">
                    <PenIcon color="#E0E4E9" />
                </Link>
            }
            <div className="profile-card__content">
                <div className="d-flex justify-center">
                    <div className="profile-card__avatar d-flex justify-center align-center">
                        <UserIcon width={ 18 } />
                    </div>
                </div>
                <div className="profile-card__user">
                    <div className="profile-card__name">
                        <Link to={ `/users/${ user.profile._id }` }>{user.profile.firstName + " " + user.profile.lastName}</Link>
                    </div>
                    {
                        user.profile && user.profile.biography &&
                        <div className="profile-card__biography">
                            { user.profile.biography }
                        </div>
                    }
                    {
                        me.profile && me.profile._id !== user.profile._id &&
                        <div className="profile-card__contacts">
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
