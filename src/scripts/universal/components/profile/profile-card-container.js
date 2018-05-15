import * as React from "react";
import { connect } from "react-redux";
import ProfileCard from "./profile-card";

const CardContainer = ({ me }) => {
    return <ProfileCard profile={me.profile} />
};

const mapStateToProps = (state) => {
    return {
        me: state.me
    };
};

export default connect(mapStateToProps)(CardContainer);