import * as React from "react";
import { Field, reduxForm, SubmissionError } from "redux-form";
import Input from "../../utils/form/input";
import Select from "../../utils/form/select";
import { required, email } from "../../utils/form/validators";

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

class SignUpForm extends React.Component {

    render () {
        const { handleSubmit } = this.props;

        return (
            <div className="auth-form-container">
                <h3>Sign up to Petsbourg</h3>

                <form className="auth-form" onSubmit={handleSubmit}>
                    <Field name="firstName" id="signUpFirstName" placeholder="First name" component={ Input } validate={ [required] } border={false} />

                    <Field name="lastName" id="signUpLastName" placeholder="Last name" component={ Input } validate={ [required] } border={false} />

                    <Field name="email" id="signUpEmail" type="email" placeholder="Email" component={ Input } validate={ [required, email] } border={false} />

                    <Field name="gender" id="signUpGender" placeholder="Select gender" options={genderOptions} component={ Select } validate={ [required] } border={false} />

                    <Field name="password" type="password" id="signUpPassword" placeholder="Password" component={ Input } validate={ [required] } border={false} />

                    <div className="text-right">
                        <button type="submit" className="btn btn-green">Sign up</button>
                    </div>
                </form>
            </div>
        );
    }
}

const formName = "signUpForm";

export default reduxForm({ form: formName })(SignUpForm);
