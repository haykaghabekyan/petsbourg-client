import React from 'react';
import debounce from 'lodash/debounce';
import { withRouter } from 'react-router-dom';

class TopSearch extends React.Component {

    state = {
        query: null,
    };

    constructor (props) {
        super (props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange (event) {
        event.persist();

        debounce(event => {
            this.setState({
                query: event.target.value
            });
        }, 100)(event);
    }

    onSubmit (e) {
        e.preventDefault();

        let url = '/search';

        const { query } = this.state;

        if (query) {
            url += `?q=${ query }`
        }

        this.props.history.push(url);
    }

    render () {
        return (
            <div className="top-search">
                <form onSubmit={ this.onSubmit }>
                    <input className="top-search-input" placeholder="Search.." onChange={ this.onChange } />
                </form>
            </div>
        );
    }

}

export const TopSearchComponent = withRouter(TopSearch);