import React from "react";
import moment from "moment";
import { Field, reduxForm } from "redux-form";
import { required, email } from "../../../utils/form/validators";
import Input from "../../../utils/form/input";
import Select from "../../../utils/form/select";
import Textarea from "../../../utils/form/textarea";
import { GENDER_OPTIONS } from "../../../constants/gender-options";
import EditProfilePicture from "./edit-profile-picture";

class EditUserForm extends React.Component {
    componentWillMount() {
        const { userProfile } = this.props;

        this.props.initialize({
            firstName: userProfile.firstName,
            lastName: userProfile.lastName,
            email: userProfile.email,
            birthday: moment(userProfile.birthday).format('YYYY-MM-DD'),
            biography: userProfile.biography,
            gender: userProfile.gender,
        });
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="edit-user bg-white padding-35">
                <h3>Complete your profile</h3>

                <EditProfilePicture />

                <form onSubmit={ handleSubmit } className="edit-user-form">
                    <div className="margin-t-30">
                        <h2 className="margin-b-20">General account settings</h2>

                        <div className="d-flex row">
                            <div className="col-6">
                                <Field name="firstName" id="editUserFirstName" placeholder="First name" component={ Input } validate={ [required] } />
                            </div>
                            <div className="col-6">
                                <Field name="lastName" id="editUserLastName" placeholder="Last name" component={ Input } validate={ [required] } />
                            </div>
                        </div>
                        <div className="d-flex row">
                            <div className="col-6">
                                <Field name="email" id="editUserEmail" placeholder="Email" component={ Input } validate={ [required, email] } />
                            </div>
                            <div className="col-6">
                                <Field name="gender" id="editUserGender" placeholder="Select gender" options={ GENDER_OPTIONS } component={ Select } validate={ [] } />
                            </div>
                        </div>
                        <div className="d-flex row">
                            <div className="col-6">
                                <Field name="birthday" id="editUserBirthday" placeholder="Birthday" type="date" component={ Input } validate={ [required] } />
                            </div>
                            <div className="col-6" />
                        </div>
                    </div>

                    <div className="margin-t-30">
                        <h2 className="margin-b-20">Biography</h2>

                        <Field name="biography" id="editUserBiography" placeholder="Biography" component={ Textarea } validate={ [] } />
                    </div>

                    <div className="text-right">
                        <button type="submit" className="btn btn-green">Save</button>
                    </div>
                </form>
            </div>
        );
    }
}

const formName = "editUserForm";

export default reduxForm({
    form: formName,
})(EditUserForm);
