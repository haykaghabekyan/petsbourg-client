import React from "react";
import { Link } from "react-router-dom";
import Input from "../../utils/form/input";
import { required, email } from "../../utils/form/validators";
import { Field, reduxForm, SubmissionError } from "redux-form";
import FacebookIcon from "../../utils/icons/social/facebook";
import TwitterIcon from "../../utils/icons/social/twitter";
import GoogleIcon from "../../utils/icons/social/google";

class SignInForm extends React.Component {

    render () {
        const {handleSubmit} = this.props;

        return (
            <div className="auth-form-container">
                <h3>Sign in to Petsbourg</h3>
                <form className="auth-form" onSubmit={handleSubmit}>
                    <Field name="email" type="text" id="signIpEmail" placeholder="Email" component={ Input } validate={ [required, email] } />

                    <Field name="password" type="password" id="signIpPassword" placeholder="Password" component={ Input } validate={ [required] } />

                    <div className="action-buttons-container">
                        <Link to="/forgot-password">Forgot your password?</Link>
                        <button type="submit" className="btn btn-green">Sign in</button>
                    </div>
                </form>

                <p className="hr-text">or</p>

                <div className="social-auth-container">
                    <Link to="/" className="btn btn-circle btn-facebook">
                        <FacebookIcon width={13} color="#BDBDBD" />
                    </Link>
                    <Link to="/" className="btn btn-circle btn-twitter">
                        <TwitterIcon width={24} color="#BDBDBD" />
                    </Link>
                    <Link to="/" className="btn btn-circle btn-google">
                        <GoogleIcon width={24} color="#BDBDBD" />
                    </Link>
                </div>
            </div>
        );
    }

}

const formName = "signInForm";

export default reduxForm({ form: formName })(SignInForm);
