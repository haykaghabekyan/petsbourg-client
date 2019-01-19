import React from 'react';
import { connect } from 'react-redux';
import { homePageLoadAction } from '../model/home.actions';
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
        const { me, homePage } = this.props;

        if (!homePage.opened || homePage.isLoading) {
            return <LoadingLayout />;
        }

        return (
            <MainLayout me={ me }>
                <ProfileLayout me={ me } user={ me }>
                    <div>qaq</div>
                </ProfileLayout>
            </MainLayout>
        );
    }
}

const mapStateToProps = state => ({
    me: state.me,
    homePage: state.homePage,
});
const actionCreators = {
    homePageLoadAction,
};

export const HomePage = connect(mapStateToProps, actionCreators)(HomeContainer);
