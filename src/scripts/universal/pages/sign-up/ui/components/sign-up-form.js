import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, email } from '../../../../utils/form/validators';
import { GENDER_OPTIONS } from '../../../../constants/gender-options';
import Input from '../../../../utils/form/input';
import Select from '../../../../utils/form/select';

const SignUpFormComponent = ({ handleSubmit }) => {
    return (
        <div className="auth-form-container">
            <h3>Sign up to Petsbourg</h3>

            <form className="auth-form" onSubmit={handleSubmit}>
                <Field name="firstName" id="signUpFirstName" placeholder="First name" component={ Input } validate={ [required] } border={false} />

                <Field name="lastName" id="signUpLastName" placeholder="Last name" component={ Input } validate={ [required] } border={false} />

                <Field name="email" id="signUpEmail" type="email" placeholder="Email" component={ Input } validate={ [required, email] } border={false} />

                <Field name="gender" id="signUpGender" placeholder="Select gender" options={ GENDER_OPTIONS } component={ Select } validate={ [required] } border={false} />

                <Field name="password" type="password" id="signUpPassword" placeholder="Password" component={ Input } validate={ [required] } border={false} />

                <div className="text-right">
                    <button type="submit" className="btn btn-green">Sign up</button>
                </div>
            </form>
        </div>
    );
}

export const SignUpForm = reduxForm({ form: 'signUpForm' })(SignUpFormComponent);
