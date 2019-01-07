import React from 'react';
import { connect } from 'react-redux';
import { indexPageLoadAction } from '../model/index.actions';
import { Link } from 'react-router-dom';

class IndexContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (!this.props.indexPage.data) {
            this.props.indexPageLoadAction();
        }
    }

    render() {
        return (
            <div>
                Home page - { String(this.props.indexPage.isLoading) }
                <div>
                    <Link to='/home'>home</Link>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    indexPage: state.indexPage
});
const actionCreators = {
    indexPageLoadAction,
};

export const IndexPage = connect(mapStateToProps, actionCreators)(IndexContainer);
