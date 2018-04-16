import * as React from "react";
import { Link } from "react-router-dom";
import Input from "../../utils/form/input";
import { required, email } from "../../utils/form/validators";
import { Field, reduxForm, SubmissionError } from "redux-form";

class SignInForm extends React.Component<any, any> {

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
                    <Link to="/" className="btn btn-square btn-facebook">
                        <i className="fab fa-facebook-f" />
                    </Link>
                    <Link to="/" className="btn btn-square btn-twitter">
                        <i className="fab fa-twitter" />
                    </Link>
                    <Link to="/" className="btn btn-square btn-google">
                        <i className="fab fa-google" />
                    </Link>
                </div>
            </div>
        );
    }

}

const formName = "signInForm";

export default reduxForm({ form: formName })(SignInForm);
