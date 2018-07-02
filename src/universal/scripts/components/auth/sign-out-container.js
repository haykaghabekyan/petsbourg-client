import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import SignOut from "./sign-out";
import { signOut } from "../../redux/actions/auth";

class SignOutContainer extends React.Component {

    constructor(props) {
        super (props);

        this.handleSignOutClick = this.handleSignOutClick.bind(this);
    }

    handleSignOutClick(event) {
        event.preventDefault();

        this.props.signOut();

        this.props.history.push("/");
    };

    render () {
        return <SignOut handleSignOutClick={ this.handleSignOutClick } />;
    }
}

const actionCreators = {
    signOut,
};

export default withRouter(connect(null, actionCreators)(SignOutContainer));
