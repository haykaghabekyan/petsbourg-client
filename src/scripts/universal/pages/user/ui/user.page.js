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

    render() {
        const { me, userPage } = this.props;

        if (!userPage.opened || userPage.isLoading) {
            return <LoadingLayout />;
        }

        return (
            <MainLayout me={ me }>
                <ProfileLayout me={ me } user={ userPage }>
                    <div>qaq</div>
                </ProfileLayout>
            </MainLayout>
        );
    }

    componentWillUnmount() {
        this.props.userPageResetAction();
    }
}

const mapStateToProps = state => ({
    me: state.me,
    userPage: state.userPage,
});
const actionCreators = {
    userPageLoadAction,
    userPageResetAction,
};

export const UserPage = connect(mapStateToProps, actionCreators)(UserPageContainer);
