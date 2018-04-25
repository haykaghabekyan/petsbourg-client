import * as React from "react";
import { connect } from "react-redux";
import ProfileCard from "./profile-card";

const CardContainer = ({ auth }) => {
    return <ProfileCard user={auth.user} />
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    };
};

export default connect(mapStateToProps)(CardContainer);