import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { SubmissionError } from 'redux-form';
import { FooterComponent } from '../../../components/footer';
import { SignUpForm } from './components/sign-up-form';
import { signUpPageSignInAction } from '../../sign-up';

class SignUpContainer extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(data, dispatch) {
        const promise = new Promise((resolve, reject) => {
            dispatch(signUpPageSignInAction(data, { resolve, reject }));
        });

        promise
            .then(user => {
                
            })
            .catch(error => {
                throw new SubmissionError({
                    _error: `Sign up failed! Server responded with: ${ error.message }`,
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
                <FooterComponent />
            </div>
        );
    }
}

const mapStateToProps = state => ({ me: state.me });
export const SignUpPage = connect(mapStateToProps)(SignUpContainer);
