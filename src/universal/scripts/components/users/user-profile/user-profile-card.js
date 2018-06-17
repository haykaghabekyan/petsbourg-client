import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import UserIcon from "../../../utils/icons/common/user";
import MessageIcon from "../../../utils/icons/common/message";
import PhoneIcon from "../../../utils/icons/common/phone";
import EnvelopeIcon from "../../../utils/icons/common/envelope";

const Card = ({ user, me }) => {
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
                        <Link to={ `/users/${ user.profile.id }` }>{user.profile.firstName + " " + user.profile.lastName}</Link>
                    </div>
                    <div className="profile-card-info">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores consequuntur dolor ipsa ipsam molestiae nemo nobis porro quia temporibus!
                    </div>
                    {
                        me.profile && me.profile.id !== user.profile.id && <div className="profile-card-contacts">
                            <div>
                                <MessageIcon width={15} />
                            </div>
                            <div>
                                <PhoneIcon width={12} />
                            </div>
                            <div>
                                <EnvelopeIcon width={15} />
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
