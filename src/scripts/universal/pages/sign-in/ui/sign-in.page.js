import React from 'react';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';
import { Link} from 'react-router-dom';
import { FooterComponent } from '../../../components/footer';
import { SignInForm } from './components/sign-in-form';
import { signInPageSignInAction } from '../model/sign-in.actions';
import dog from '../../../../../media/images/dog.png';

class SignInContainer extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(data, dispatch) {
        try {
            await new Promise((resolve, reject) => {
                dispatch(signInPageSignInAction(data, { resolve, reject }));
            });
        } catch (error) {
            throw new SubmissionError({
                _error: error.message,
            });
        }
    }

    render() {
        return (
            <div className="auth-layout">
                <header className="main-header">
                    <div className="container d-flex justify-space-between align-center">
                        <div className="brand-container">
                            <Link to="/" className="brand">Petsbourg</Link>
                        </div>
                        <div className="header-actions auth-actions">
                            Don't have an account? <Link to="/sign-up" className="btn btn-transparent">Sign Up</Link>
                        </div>
                    </div>
                </header>
                <main className="">
                    <div className="container index-page">
                        <div className="get-started-container">
                            <img src={ dog } alt="Dog" />
                        </div>
                        <SignInForm onSubmit={ this.handleSubmit } />
                    </div>
                </main>
                <FooterComponent />
            </div>
        );
    }
}

const actionCreators = { signInPageSignInAction };

export const SignInPage = connect(null, actionCreators)(SignInContainer);
