import * as React from "react";
import {connect} from "react-redux";
import {signIn} from "../../redux/actions/auth";
import SignInForm from "./sign-in-form";

class SignIn extends React.Component {

    constructor (props) {
        super (props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (data) {
        this.props.signIn(data);
    }

    render () {
        return <SignInForm onSubmit={this.handleSubmit} />;
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    };
};

const actionCreator = {
    signIn: signIn
};

export default connect(mapStateToProps, actionCreator)(SignIn);