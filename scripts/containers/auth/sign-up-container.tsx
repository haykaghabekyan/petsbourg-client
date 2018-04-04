import * as React from "react";
import {connect} from "react-redux";
import {signUp} from "../../redux/actions/auth";
import SignUpForm from "../../components/auth/sign-up-form";

class SignUp extends React.Component<any, any> {

    constructor (props) {
        super (props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (data): void {
        this.props.signUp(data);
    }

    render () {
        return <SignUpForm onSubmit={this.handleSubmit} />;
    }
}

const actionCreator = {
    signUp: signUp
};

export default connect(null, actionCreator)(SignUp);