import React from 'react';
import { connect } from 'react-redux';
import { MainLayout } from '../../../components/layouts/main';
import { userPageLoadAction } from '../model/user.actions';
import { ProfileLayout } from '../../../components/layouts/profile';

export class UserPageContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (!this.props.userPage.opened) {
            const { params } = this.props.match;
            this.props.userPageLoadAction(params);
        }
    }

    render() {
        const { me, userPage } = this.props;
        if (!userPage.opened) {
            return 'not opened';
        }

        if (userPage.isLoading) {
            return 'loading';
        }

        console.log(me, userPage);

        return (
            <MainLayout me={ me }>
                <ProfileLayout me={ me } user={ userPage }>
                    <div>qaq</div>
                </ProfileLayout>
            </MainLayout>
        );
    }
}

const mapStateToProps = state => ({
    me: state.me,
    userPage: state.userPage,
});
const actionCreators = {
    userPageLoadAction,
};

export const UserPage = connect(mapStateToProps, actionCreators)(UserPageContainer);
