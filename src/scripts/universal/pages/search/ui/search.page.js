import React from 'react';
import queryString from 'query-string';
import { connect } from 'react-redux';
import { MainLayout } from '../../../components/layouts/main';
import { SearchForm } from './components/search';
import { SearchPetCard } from './components/pet-card';

class SearchPageComponent extends React.Component {

    componentDidMount() {
        const params = queryString.parse(this.props.location.search);

    }

    render() {
        const { auth, seachPage } = this.props;

        return (
            <MainLayout user={ auth.user } pets={ auth.pets }>
                <div className="search-page d-flex">
                    <div className="col-9">
                        <SearchForm />

                        <div className="d-flex padding-t-20">
                            <div className="col-4">
                                <SearchPetCard />
                            </div>
                            <div className="col-4">
                                <SearchPetCard />
                            </div>
                        </div>
                    </div>
                    <div className="col-3 bg-white search-page-filters">
                        <h3 className="search-page-filters-title">Filters</h3>
                    </div>
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
