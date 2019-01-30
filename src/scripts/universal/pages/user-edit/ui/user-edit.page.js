import React from 'react';
import { connect } from 'react-redux';
import { MainLayout } from '../../../components/layouts/main';
// import { userPageLoadAction, userPageResetAction } from '../model/user.actions';
// import { ProfileLayout } from '../../../components/layouts/profile';
import { LoadingLayout } from '../../../components/layouts/loading';

export class UserEditPageContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // const { userPage, match } = this.props;
        //
        // if (!userPage.opened) {
        //     this.props.userPageLoadAction(match.params);
        // }
    }

    render() {
        const { auth, userEditPage } = this.props;

        // TODO
        if (userEditPage.error) {
            return userEditPage.error;
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
        // this.props.userPageResetAction();
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    userEditPage: state.userEditPage,
});
const actionCreators = {

};

export const UserEditPage = connect(mapStateToProps, actionCreators)(UserEditPageContainer);
