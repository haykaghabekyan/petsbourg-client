import React from "react";
import { connect } from "react-redux";

import UserProfile from "../users/user-profile/user-profile";

const HomeContainer = ({ me }) => {
    return <UserProfile user={ me } />;
};

const mapStateToProps = state => {
    return {
        me: state.me,
    };
};

export default connect(mapStateToProps)(HomeContainer);
