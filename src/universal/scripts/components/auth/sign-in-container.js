import React from "react";
import { connect} from "react-redux";
import { SubmissionError } from "redux-form";
import { signIn } from "../../redux/actions/auth";
import SignInForm from "./sign-in-form";

class SignIn extends React.Component {

    constructor (props) {
        super (props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (data) {
        return this.props.signIn(data).catch(error => {
            throw new SubmissionError({
                ...error.response.data.errors
            });
        });
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