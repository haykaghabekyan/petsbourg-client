import React from "react";
import { connect } from "react-redux";
import { SubmissionError } from "redux-form";
import { Redirect } from "react-router-dom";
import { signUp } from "../../redux/actions/auth";
import SignUpForm from "./sign-up-form";

class SignUp extends React.Component {

    constructor (props) {
        super (props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (data) {
        return this.props.signUp(data).then(() => {

        }).catch(error => {
            throw new SubmissionError({
                ...error.response.data.errors
            });
        });
    }

    render () {
        const {me} = this.props;

        return !me.profile ? <SignUpForm onSubmit={this.handleSubmit} /> : <Redirect push to="/" />;
    }
}

const mapStateToProps = state => {
    return {
        me: state.me
    };
};

const actionCreator = {
    signUp: signUp
};

export default connect(mapStateToProps, actionCreator)(SignUp);
