import * as React from "react";
import { Field, reduxForm, SubmissionError } from "redux-form";
import Input from "../../utils/input";
import Select from "../../utils/select";
import { required, email } from "../../utils/validators";

const genderOptions = [{
    name: "Male",
    value: "Male"
}, {
    name: "Female",
    value: "Female"
}, {
    name: "Other",
    value: "Other"
}];

class SignUpForm extends React.Component<any, any> {

    render () {
        const { handleSubmit } = this.props;

        return (
            <div className="auth-form-container">
                <h3>Sign up to Petsbourg</h3>

                <form className="auth-form" onSubmit={handleSubmit}>
                    <Field name="firstName" id="signUpFirstName" placeholder="First name" component={ Input } validate={ [required] } />

                    <Field name="lastName" id="signUpLastName" placeholder="Last name" component={ Input } validate={ [required] } />

                    <Field name="email" id="signUpEmail" type="email" placeholder="Email" component={ Input } validate={ [required, email] } />

                    <Field name="gender" id="signUpGender" placeholder="Select gender" options={genderOptions} component={ Select } validate={ [required] } />

                    <Field name="password" type="password" id="signUpPassword" placeholder="Password" component={ Input } validate={ [required] } />

                    <button type="submit" className="btn btn-green">Sign up</button>
                </form>
            </div>
        );
    }
}

const formName = "signUpForm";

export default reduxForm({ form: formName })(SignUpForm);
