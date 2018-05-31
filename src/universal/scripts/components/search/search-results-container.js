import React from "react";
import queryString from "query-string";

class SearchResultsContainer extends React.Component {
    render () {

        const { q = null } = queryString.parse(this.props.location.search);

        return (
            <div>
                SearchResultsContainer -> { q }
            </div>
        );
    }
}

export default SearchResultsContainer;