import * as React from "react";
import {connect} from "react-redux";
import {signUp} from "../../redux/actions/auth";
import SignUpForm from "./sign-up-form";
import {SubmissionError} from "redux-form";

class SignUp extends React.Component {

    constructor (props) {
        super (props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (data) {
        return this.props.signUp(data).catch(error => {
            throw new SubmissionError({
                ...error.response.data.errors
            });
        });
    }

    render () {
        return <SignUpForm onSubmit={this.handleSubmit} />;
    }
}

const actionCreator = {
    signUp: signUp
};

export default connect(null, actionCreator)(SignUp);