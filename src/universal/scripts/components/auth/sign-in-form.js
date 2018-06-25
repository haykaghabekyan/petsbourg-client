import React from "react";
import { Link } from "react-router-dom";
import Input from "../../utils/form/input";
import { required } from "../../utils/form/validators";
import { Field, reduxForm } from "redux-form";
import FacebookIcon from "../../utils/icons/social/facebook";
import TwitterIcon from "../../utils/icons/social/twitter";
import GoogleIcon from "../../utils/icons/social/google";

const SignInForm = ({ handleSubmit }) => {
    return (
        <div className="auth-form-container">
            <h3>Sign in to Petsbourg</h3>
            <form onSubmit={ handleSubmit } className="auth-form">
                <Field name="email" type="text" id="signIpEmail" placeholder="Email or username" component={ Input } validate={ [required] } border={false} />

                <Field name="password" type="password" id="signIpPassword" placeholder="Password" component={ Input } validate={ [required] } border={false} />

                <div className="action-buttons-container">
                    <Link to="/forgot-password">Forgot your password?</Link>
                    <button type="submit" className="btn btn-green">Sign in</button>
                </div>
            </form>

            <p className="hr-text">or</p>

            <div className="social margin-t-30">
                <Link to="/" className="btn social-btn btn-circle btn-facebook margin-h-20">
                    <FacebookIcon width={13} color="#BDBDBD" />
                </Link>
                <Link to="/" className="btn social-btn btn-circle btn-twitter margin-h-20">
                    <TwitterIcon width={24} color="#BDBDBD" />
                </Link>
                <Link to="/" className="btn social-btn btn-circle btn-google margin-h-20">
                    <GoogleIcon width={24} color="#BDBDBD" />
                </Link>
            </div>
        </div>
    );
};

const formName = "signInForm";

export default reduxForm({
    form: formName,
})(SignInForm);
