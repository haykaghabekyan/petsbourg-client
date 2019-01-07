import React from "react";
import { renderRoutes } from "react-router-config";
import { connect } from "react-redux";
import { getUserProfile, removeUser } from "../../../redux/actions/user";
import ProfileLayout from "../../layouts/profile";
import ProfileLoadingLayout from "../../layouts/profile-loading";

class UserProfileContainer extends React.Component {

    componentWillMount() {
        const { match: { params: { userId } } } = this.props;

        this.props.getUserProfile(userId);
    }

    componentWillUnmount() {
        this.props.removeUser();
    }

    render () {
        const { user, route } = this.props;
        const { isFetching, profile } = user;

        if (isFetching) {
            return <ProfileLoadingLayout />;
        }

        if (!isFetching && !user.profile) {
            return <div>not found</div>;
        }

        return (
            <ProfileLayout userProfile={ profile }>
                { renderRoutes(route.routes) }
            </ProfileLayout>
        );
    }

}

const mapStateToProps = state => {
    return {
        me: state.me,
        user: state.user,
    };
};

const actionCreators = {
    getUserProfile,
    removeUser,
};

export default connect(mapStateToProps, actionCreators)(UserProfileContainer);
