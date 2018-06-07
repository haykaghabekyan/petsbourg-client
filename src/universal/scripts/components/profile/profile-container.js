import React from "react";
import { connect } from "react-redux";
import { renderRoutes } from "react-router-config";
import { getUserProfile } from "../../redux/actions/user";

import ProfileLayout from "../layouts/profile";

class ProfileContainer extends React.Component {

    componentDidMount () {
        const {match: { params: { userId } }} = this.props;

        this.props.getUserProfile(userId);
    }

    render () {
        const { route, user } = this.props;
        const { profile, pets } = user;

        if (!profile) {
            return <div>Loading...</div>;
        }

        if (profile === "NOT_FOUND") {
            return <div>No user found!</div>;
        }

        return (
            <ProfileLayout user={user}>
                {renderRoutes(route.routes, { pets })}
            </ProfileLayout>
        );
    }

}

const mapStateToProps = state => {
    return {
        user: state.user,
    };
};

const actionCreators = {
    getUserProfile,
};

export default connect(mapStateToProps, actionCreators)(ProfileContainer);
