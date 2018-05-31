import React from "react";
import SignOut from "./sign-out";
import {connect} from "react-redux";
import {signOut} from "../../redux/actions/auth";

class SignOutContainer extends React.Component {

    constructor(props) {
        super (props);

        this.handleSignOutClick = this.handleSignOutClick.bind(this);
    }

    handleSignOutClick(event) {
        event.preventDefault();

        this.props.signOut();
    };

    render () {
        return <SignOut handleSignOutClick={this.handleSignOutClick} />;
    }
}

const actionCreators = {
    signOut
};

export default connect(null, actionCreators)(SignOutContainer);