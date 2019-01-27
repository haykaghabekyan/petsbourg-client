import React from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';
import { MainLayout } from '../../../components/layouts/main';

class SearchPageComponent extends React.Component {

    componentDidMount() {
        const params = queryString.parse(this.props.location.search);

    }

    render() {
        const { auth, seachPage, location } = this.props;
        const { query = '' } = queryString.parse(location.search);

        return (
            <MainLayout user={ auth.user } pets={ auth.pets }>
                <div>
                    Search Page
                </div>
            </MainLayout>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    searchPage: state.searchPage
});

const actionCreators = {

};

export const SearchPage = connect(mapStateToProps, actionCreators)(SearchPageComponent);
