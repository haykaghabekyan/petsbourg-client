import React from 'react';
import { Link } from 'react-router-dom';
import { FooterComponent } from '../../../components/footer';
import rabbit from '../../../../../media/images/rabbit.png';

export class ForgotPasswordPage extends React.Component {
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
                <main className="">
                    <div className="container index-page">
                        <div className="get-started-container text-center">
                            <img src={ rabbit } alt="Rabbit" />
                        </div>
                        <div className="auth-form-container">
                            Forget password - in development
                        </div>
                    </div>
                </main>
                <FooterComponent />
            </div>
        );
    }
}
