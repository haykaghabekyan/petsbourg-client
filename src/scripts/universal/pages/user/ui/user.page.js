import React from 'react';
import { connect } from 'react-redux';
import { MainLayout } from '../../../components/layouts/main';
import { userPageLoadAction } from '../model/user.actions';

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
        const { me } = this.props;
        return (
            <MainLayout me={ me }>
                user
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
