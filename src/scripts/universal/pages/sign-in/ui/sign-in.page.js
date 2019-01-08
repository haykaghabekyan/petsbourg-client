import React from 'react';
import { connect } from 'react-redux';
import { Link} from 'react-router-dom';
// import { SubmissionError } from 'redux-form';
import { Footer } from '../../../components/footer';
import { SignInForm } from './components/sign-in-form';

class SignInContainer extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(data) {
        // return this.props.signIn(data).catch(error => {
        //     throw new SubmissionError({
        //         ...error.response.data.errors
        //     });
        // });
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
                        <div className="get-started-container" />
                        <SignInForm onSubmit={ this.handleSubmit } />
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

}

const mapStateToProps = null;
const actionCreators = {};

export const SignInPage = connect(mapStateToProps, actionCreators)(SignInContainer);
