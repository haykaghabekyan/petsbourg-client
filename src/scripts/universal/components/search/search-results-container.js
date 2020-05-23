import React from 'react';
import queryString from 'query-string';
import {connect} from 'react-redux';
// import {search} from '../../redux/actions/search';

class SearchResultsContainer extends React.Component {
  componentDidMount() {
    const params = queryString.parse(this.props.location.search);

    this.props.search(params);
  }

  render() {
    const {q = null} = queryString.parse(this.props.location.search);

    return (
      <div>
        SearchResultsContainer
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const actionCreators = {
  // search,
};

export default connect(mapStateToProps, actionCreators)(SearchResultsContainer);
