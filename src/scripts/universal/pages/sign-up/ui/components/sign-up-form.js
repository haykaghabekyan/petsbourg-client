import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, email } from '../../../../utils/validators';
import { GENDER_OPTIONS } from '../../../../constants/gender-options';
import Input from '../../../../components/form-elements/input';
import Select from '../../../../components/form-elements/select';

const SignUpFormComponent = ({ handleSubmit }) => {
    return (
        <div className="auth-form-container">
            <h3>Sign up to Petsbourg</h3>

            <form className="auth-form" onSubmit={ handleSubmit }>
                <Field name="firstName" placeholder="First name" component={ Input } validate={ [required] } border={ false } />

                <Field name="lastName" placeholder="Last name" component={ Input } validate={ [required] } border={ false } />

                <Field name="email" type="email" placeholder="Email" component={ Input } validate={ [required, email] } border={ false } />

                <Field name="gender" placeholder="Select gender" options={ GENDER_OPTIONS } component={ Select } validate={ [required] } border={ false } />

                <Field name="password" type="password" placeholder="Password" component={ Input } validate={ [required] } border={ false } />

                <div className="text-right">
                    <button type="submit" className="btn btn-green">Sign up</button>
                </div>
            </form>
        </div>
    );
};

export const SignUpForm = reduxForm({ form: 'signUpForm' })(SignUpFormComponent);
