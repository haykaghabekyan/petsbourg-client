import * as React from "react";
import {connect} from "react-redux";
import {signIn} from "../../redux/actions/auth";
import SignInForm from "./sign-in-form";

interface SignInInterface {
    username: string,
    password: string
}

class SignIn extends React.Component<any, SignInInterface> {

    constructor (props) {
        super (props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (data): void {
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