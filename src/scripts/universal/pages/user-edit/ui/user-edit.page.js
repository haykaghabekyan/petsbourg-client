import React from 'react';
import { connect } from 'react-redux';
import { MainLayout } from '../../../components/layouts/main';
import { userEditPageLoadAction, userEditPageResetAction } from '../model/user-edit.actions';
// import { ProfileLayout } from '../../../components/layouts/profile';
import { LoadingLayout } from '../../../components/layouts/loading';

export class UserEditPageContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { userEditPage, match } = this.props;

        if (!userEditPage.opened) {
            this.props.userEditPageLoadAction(match.params);
        }
    }

    render() {
        const { auth, userEditPage } = this.props;

        // TODO
        if (userEditPage.error) {
            return (
                <MainLayout user={ auth.user } pets={ auth.pets }>
                    { userEditPage.error }
                </MainLayout>
            );
        }

        if (!userEditPage.opened || userEditPage.isLoading) {
            return (
                <MainLayout user={ auth.user } pets={ auth.pets }>
                    <LoadingLayout />
                </MainLayout>
            );
        }

        return (
            <MainLayout user={ auth.user } pets={ auth.pets }>

            </MainLayout>
        );
    }

    componentWillUnmount() {
        this.props.userEditPageResetAction();
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    userEditPage: state.userEditPage,
});
const actionCreators = {
    userEditPageLoadAction,
    userEditPageResetAction,
};

export const UserEditPage = connect(mapStateToProps, actionCreators)(UserEditPageContainer);
