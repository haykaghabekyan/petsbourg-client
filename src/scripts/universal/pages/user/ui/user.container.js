import React from 'react';
import { connect } from 'react-redux';

export class UserPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                User page
            </div>
        );
    }

}

const mapStateToProps = state => state;
const actionCreators = {};

export const UserContainer = connect(mapStateToProps, actionCreators)(UserPage);
