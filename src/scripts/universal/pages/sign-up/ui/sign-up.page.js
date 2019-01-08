import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Footer } from '../../../components/footer';
import { SubmissionError } from "redux-form";
import { SignUpForm } from './components/sign-up-form';

class SignUpContainer extends React.Component {
    constructor(props) {
        super(props);

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

    render() {
        const { me } = this.props;

        return (
            <div className="auth-layout">
                <header className="main-header">
                    <div className="container d-flex justify-space-between align-center">
                        <div className="brand-container">
                            <Link to="/" className="brand">Petsbourg</Link>
                        </div>
                        <div className="header-actions auth-actions">
                            Have an account? <Link to="/" className="btn btn-transparent">Sign In</Link>
                        </div>
                    </div>
                </header>
                <main className="">
                    <div className="container index-page">
                        <div className="get-started-container" />
                        { !me || !me.profile ? <SignUpForm onSubmit={this.handleSubmit} /> : <Redirect push to="/" /> }
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    me: state.me,
});
const actionCreators = {

};

export const SignUpPage = connect(mapStateToProps, actionCreators)(SignUpContainer);
