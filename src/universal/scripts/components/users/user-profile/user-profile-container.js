import React from "react";
import { connect } from "react-redux";
import { getUserProfile, removeUserProfile } from "../../../redux/actions/user";
import UserProfile from "./user-profile";

class UserProfileContainer extends React.Component {

    componentDidMount() {
        const { match: { params: { userId } } } = this.props;

        this.props.getUserProfile(userId);
    }

    componentWillUnmount() {
        this.props.removeUserProfile();
    }

    render () {
        const { user } = this.props;
        const { profile, isFetching } = user;

        if (isFetching && !profile) {
            return <div>Loading...</div>;
        }

        return <UserProfile user={ user } />;
    }

}

const mapStateToProps = state => {
    return {
        user: state.user,
    };
};

const actionCreators = {
    getUserProfile,
    removeUserProfile,
};

export default connect(mapStateToProps, actionCreators)(UserProfileContainer);
