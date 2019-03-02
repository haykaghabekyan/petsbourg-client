import React from 'react';
import moment from 'moment';
import { Field, reduxForm } from 'redux-form';
import { required, email } from '../../../../utils/validators';
import { Input } from '../../../../components/form-elements/input';
import { Select } from '../../../../components/form-elements/select';
import { Textarea } from '../../../../components/form-elements/textarea';
import { Datepicker } from '../../../../components/form-elements/datepicker';
import { GENDER_OPTIONS } from '../../../../constants/gender-options';
import { UserPhoto } from './user-photo';

class UserEditFormComponent extends React.Component {
    componentWillMount() {
        const { user } = this.props;

        this.props.initialize({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            birthday: user.birthday ? moment(user.birthday).format('DD/MM/YYYY') : null,
            biography: user.biography,
            gender: user.gender,
        });
    }

    render() {
        const { handleSubmit, submit, error, dispatch, invalid, submitting } = this.props;

        return (
            <div className="edit-user bg-white padding-35">
                <h3>Complete your profile</h3>
                {/*<UserPhoto />*/}

                <form onSubmit={ handleSubmit(values => submit(values, dispatch)) } className="edit-user-form">
                    <div className="margin-t-30">
                        <h2 className="margin-b-20">General account settings</h2>

                        <div className="d-flex row">
                            <div className="col-6">
                                <Field name="firstName" placeholder="First name" component={ Input } validate={ [required] } />
                            </div>
                            <div className="col-6">
                                <Field name="lastName" placeholder="Last name" component={ Input } validate={ [required] } />
                            </div>
                        </div>
                        <div className="d-flex row">
                            <div className="col-6">
                                <Field name="email" placeholder="Email" component={ Input } validate={ [required, email] } />
                            </div>
                            <div className="col-6">
                                <Field name="gender" placeholder="Select gender" options={ GENDER_OPTIONS } component={ Select } />
                            </div>
                        </div>
                        <div className="d-flex row">
                            <div className="col-6">
                                <Field name="birthday" placeholder="Birthday" component={ Datepicker } validate={ [required] } />
                            </div>
                            <div className="col-6" />
                        </div>
                    </div>

                    <div className="margin-t-30">
                        <h2 className="margin-b-20">Biography</h2>

                        <Field name="biography" id="editUserBiography" placeholder="Biography" component={ Textarea } />
                    </div>

                    <div className="text-right">
                        <button
                            type="submit"
                            className="btn btn-green"
                            disabled={ invalid || submitting }
                        >
                            Save
                        </button>
                    </div>
                </form>
                { error && <div className="submission-error">{ error }</div> }
            </div>
        );
    }
}

export const UserEditForm = reduxForm({ form: 'editUserForm' })(UserEditFormComponent);
