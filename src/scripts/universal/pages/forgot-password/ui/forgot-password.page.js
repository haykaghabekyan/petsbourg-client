import React from 'react';
import { Link } from 'react-router-dom';
import { FooterComponent } from '../../../components/footer';
import { ForgotPasswordForm } from './components/forgot-password-form';
import rabbit from '../../../../../media/images/rabbit.png';

export class ForgotPasswordPage extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(data, dispatch) {
        try {
            await new Promise((resolve, reject) => {
                // dispatch(action(data, { resolve, reject }));
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
                            Have an account? <Link to="/" className="btn btn-transparent">Sign In</Link>
                        </div>
                    </div>
                </header>
                <main className="container index-page">
                    <div className="get-started-container text-center">
                        <img src={ rabbit } className="margin-v-30" alt="Rabbit" />
                    </div>
                    <ForgotPasswordForm handleSubmit={ this.handleSubmit } />
                </main>
                <FooterComponent />
            </div>
        );
    }
}
