import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {required, email} from '../../../../utils/validators';
import {Input} from '../../../../components/form-elements/input';

export const ForgotPasswordComponent = ({handleSubmit, submit, error, dispatch, invalid, submitting, pristine}) => {
  return (
    <div className="auth-form-container">
      <h3>Reset password</h3>

      <form method="post" className="auth-form" onSubmit={handleSubmit(values => submit(values, dispatch))}>
        <Field name="email" type="email" placeholder="Email" component={Input} validate={[required, email]}
               border={false}/>

        <div className="text-right">
          <button
            type="submit"
            className="btn btn-green"
            disabled={invalid || submitting || pristine}
          >
            Send reset link
          </button>
        </div>
      </form>

      {error && <div className="submission-error">{error}</div>}
    </div>
  );
}

export const ForgotPasswordForm = reduxForm({form: 'forgotPassword'})(ForgotPasswordComponent);
