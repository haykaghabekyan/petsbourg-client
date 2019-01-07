import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { homePageLoadAction } from '../model/home.actions';

class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (!this.props.homePage.data) {
            this.props.homePageLoadAction();
        }
    }

    render() {
        return (
            <div>
                Home page - { String(this.props.homePage.isLoading) }
                <div>
                    <Link to='/'>index</Link>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    homePage: state.homePage
});
const actionCreators = {
    homePageLoadAction,
};

export const HomePage = connect(mapStateToProps, actionCreators)(HomeContainer);
