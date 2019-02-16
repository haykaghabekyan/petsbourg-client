import React from 'react';
import { withRouter } from 'react-router-dom';
import debounce from 'lodash/debounce';
import queryString from 'query-string';

class SearchFormComponent extends React.Component {
    state = {
        query: null,
    };

    constructor(props) {
        super (props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        event.persist();

        debounce(event => {
            this.setState({
                query: event.target.value
            });
        }, 100)(event);
    }

    onSubmit(event) {
        event.preventDefault();

        let url = '/search';

        const { query } = this.state;

        if (query) {
            url += `?query=${ query }`
        }

        this.props.history.push(url);
    }

    render() {
        const { query = '' } = queryString.parse(this.props.location.search);

        return (
            <div className="d-flex bg-white search-page-search align-center">
                <div className="col-7">
                    <h3>Find a pet</h3>
                    <p className="search-page-more">From thousands of pets</p>
                </div>
                <div className="col-5">
                    <form onSubmit={ this.onSubmit } className="search-page-form">
                        <input
                            className="search-page-form-input"
                            placeholder="Search..."
                            defaultValue={ query }
                            onChange={ this.onChange }
                        />
                    </form>
                </div>
            </div>
        );
    }
}

export const SearchForm = withRouter(SearchFormComponent);
