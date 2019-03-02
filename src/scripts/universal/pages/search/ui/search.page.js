import React from 'react';
import queryString from 'query-string';
import isEqual from 'lodash/isEqual';
import { connect } from 'react-redux';
import { MainLayout } from '../../../components/layouts/main';
import { SearchForm } from './components/search-form';
import { SearchPetCard } from './components/pet-card';
import { searchPageLoadAction, searchPageSearchAction } from '../model/search.actions';
import { FiltersForm } from './components/filters-form';
import { LoadingLayout } from '../../../components/layouts/loading';

class SearchPageComponent extends React.Component {

    componentDidMount() {
        const { searchPage, location } = this.props;
        const params = queryString.parse(location.search);

        if (!searchPage.opened) {
            this.props.searchPageLoadAction({
                filters: params
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        const params = queryString.parse(this.props.location.search);
        const newParams = queryString.parse(nextProps.location.search);

        if(!isEqual(params, newParams)) {
            this.props.searchPageSearchAction({
                filters: newParams
            });
        }
    }

    render() {
        const { auth, searchPage } = this.props;

        // TODO
        if (searchPage.error) {
            return (
                <MainLayout user={ auth.user } pets={ auth.pets }>
                    { searchPage.error }
                </MainLayout>
            );
        }

        if (!searchPage.opened || searchPage.isLoading) {
            return (
                <MainLayout user={ auth.user } pets={ auth.pets }>
                    <LoadingLayout />
                </MainLayout>
            );
        }

        return (
            <MainLayout user={ auth.user } pets={ auth.pets }>
                <div className="search-page d-flex">
                    <div className="col-9">
                        <SearchForm />

                        <div className="d-flex padding-t-20 row">
                            <div className="col-4">
                                <SearchPetCard />
                            </div>
                            <div className="col-4">
                                <SearchPetCard />
                            </div>
                        </div>
                    </div>
                    <div className="col-3 bg-white">
                        <FiltersForm
                            petTypes={ searchPage.petTypes }
                            petBreeds={ searchPage.petBreeds }
                        />
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
    searchPageLoadAction,
    searchPageSearchAction,
};

export const SearchPage = connect(mapStateToProps, actionCreators)(SearchPageComponent);
