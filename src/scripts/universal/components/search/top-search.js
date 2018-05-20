import React from "react";
import { withRouter } from "react-router-dom";
import debounce from "lodash/debounce";

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

        let url = "/search";

        const { query } = this.state;

        if (query) {
            url += `?q=${ query }`
        }

        this.props.history.push(url)
    }

    render () {
        return (
            <div className="search-container">
                <form onSubmit={ this.onSubmit }>
                    <input className="search-input-item" placeholder="Search.." onChange={ this.onChange } />
                </form>
            </div>
        );
    }

}

export default withRouter(TopSearch);