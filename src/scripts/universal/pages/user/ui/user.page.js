import React from 'react';
import { connect } from 'react-redux';
import { MainLayout } from '../../../components/layouts/main';
import { userPageLoadAction, userPageResetAction } from '../model/user.actions';
import { ProfileLayout } from '../../../components/layouts/profile';
import { LoadingLayout } from '../../../components/layouts/loading';

export class UserPageContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { userPage, match } = this.props;

        if (!userPage.opened) {
            this.props.userPageLoadAction(match.params);
        }
    }

    componentWillReceiveProps() {
        const { match } = this.props;
        console.log(match);
    }

    render() {
        const { auth, userPage } = this.props;

        // TODO
        if (userPage.error) {
            return userPage.error;
        }

        if (!userPage.opened || userPage.isLoading) {
            return (
                <MainLayout>
                    <LoadingLayout />
                </MainLayout>
            );
        }

        const allowEdit = auth.user && userPage.user && auth.user._id === userPage.user._id;

        return (
            <MainLayout user={ auth.user } pets={ auth.pets }>
                <ProfileLayout user={ userPage.user } pets={ userPage.pets } allowEdit={ allowEdit }>
                    user page
                </ProfileLayout>
            </MainLayout>
        );
    }

    componentWillUnmount() {
        this.props.userPageResetAction();
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    userPage: state.userPage,
});
const actionCreators = {
    userPageLoadAction,
    userPageResetAction,
};

export const UserPage = connect(mapStateToProps, actionCreators)(UserPageContainer);
