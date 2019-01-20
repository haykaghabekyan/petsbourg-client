import React from 'react';
import { connect } from 'react-redux';
import { homePageLoadAction, homePageResetAction } from '../model/home.actions';
import { ProfileLayout } from '../../../components/layouts/profile';
import { MainLayout } from '../../../components/layouts/main';
import { LoadingLayout } from '../../../components/layouts/loading';

class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { homePage, match } = this.props;

        if (!homePage.opened) {
            this.props.homePageLoadAction(match.params);
        }
    }

    render() {
        const { auth, homePage } = this.props;

        if (!homePage.opened || homePage.isLoading) {
            return (
                <MainLayout>
                    <LoadingLayout />
                </MainLayout>
            );
        }

        return (
            <MainLayout user={ auth.user } pets={ auth.pets }>
                <ProfileLayout user={ auth.user } pets={ auth.pets } allowEdit>
                    home page
                </ProfileLayout>
            </MainLayout>
        );
    }

    componentWillUnmount() {
        this.props.homePageResetAction();
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    homePage: state.homePage,
});
const actionCreators = {
    homePageLoadAction,
    homePageResetAction,
};

export const HomePage = connect(mapStateToProps, actionCreators)(HomeContainer);
