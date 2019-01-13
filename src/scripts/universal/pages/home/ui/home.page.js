import React from 'react';
import { connect } from 'react-redux';
import { homePageLoadAction } from '../model/home.actions';
import { ProfileLayout } from '../../../components/layouts/profile';
import { MainLayout } from '../../../components/layouts/main';

class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (!this.props.homePage.opened) {
            this.props.homePageLoadAction();
        }
    }

    render() {
        const { me } = this.props;
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
