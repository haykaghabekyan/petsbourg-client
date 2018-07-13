import React from "react";
import moment from "moment";
import { required } from "../../../utils/form/validators";
import { Field, reduxForm } from "redux-form";
import Input from "../../../utils/form/input";
import Select from "../../../utils/form/select";
import Textarea from "../../../utils/form/textarea";
import ImageIcon from "../../../utils/icons/common/image";
import { GENDER_OPTIONS } from "../../../constants/gender-options";

class EditPetForm extends React.Component {

    componentWillMount() {
        const { pet: { profile } } = this.props;

        this.props.initialize({
            name: profile.name,
            petId: profile.petId,
            gender: profile.gender,
            story: profile.story,
            birthday: moment(profile.birthday).format('YYYY-MM-DD'),
            size: profile.size,
            color: profile.color,
            type: profile.type._id,
            breed: profile.breed._id,
        });
    }

    render() {
        const { handleSubmit, petTypes, pet } = this.props;

        const petTypesOptions = petTypes.map(petType => {
            return {
                name: petType.name,
                value: petType._id,
            };
        });

        const selectedType = petTypes.find(petType => petType._id === pet.profile.type._id);

        const petBreedsOptions = selectedType.breeds.map(petBreed => {
            return {
                name: petBreed.name,
                value: petBreed._id,
            };
        });

        return (
            <div className="edit-pet bg-white padding-35">
                <h3>Complete your pet profile</h3>

                <div className="margin-t-30">
                    <p className="edit-pet__add-photo ">Add a profile picture</p>

                    <div className="edit-pet__profile-photo margin-t-10 d-flex justify-center">
                        <ImageIcon width="50%" />
                    </div>
                </div>

                <form onSubmit={ handleSubmit } className="edit-pet-form">
                    <div className="margin-t-30">
                        <h2 className="margin-b-20">Pet Facts</h2>

                        <div className="d-flex row">
                            <div className="col-6">
                                <Field name="name" id="editPetName" placeholder="Name" component={ Input } validate={ [required] } />
                            </div>
                            <div className="col-6">
                                <Field name="passportId" id="editPassportId" placeholder="Passport ID" component={ Input } validate={ [] } />
                            </div>
                        </div>

                        <div className="d-flex row">
                            <div className="col-6">
                                <Field disabled name="type" id="editPetType" placeholder="Select type" options={ petTypesOptions } component={ Select } validate={ [] } />
                            </div>
                            <div className="col-6">
                                <Field name="breed" id="editPetBreed" placeholder="Select breed" options={ petBreedsOptions } component={ Select } validate={ [required] } />
                            </div>
                        </div>

                        <div className="d-flex row">
                            <div className="col-6">
                                <Field name="gender" id="editPetGender" placeholder="Select gender" options={ GENDER_OPTIONS } component={ Select } validate={ [] } />
                            </div>
                            <div className="col-6" />
                        </div>
                    </div>

                    <div className="margin-t-20">
                        <h2 className="margin-b-20">Pet Information</h2>

                        <div className="d-flex row">
                            <div className="col-6">
                                <Field name="color" id="editPetColor" placeholder="Color" component={ Input } validate={ [] } />
                            </div>
                            <div className="col-6">
                                <Field name="birthday" id="editPetBirthday" placeholder="Birthday" type="date" component={ Input } validate={ [] } />
                            </div>
                        </div>

                        <div className="d-flex row">
                            <div className="col-6">
                                <Field name="size" id="editPetSize" placeholder="Size" component={ Input } validate={ [] } />
                            </div>
                            <div className="col-6" />
                        </div>
                    </div>

                    <div className="margin-t-20">
                        <h2 className="margin-b-20">Pet Story</h2>

                        <div>
                            <Field name="story" id="editPetStory" placeholder="Funny story about your pet" component={ Textarea } validate={ [] } />
                        </div>
                    </div>

                    <div className="text-right">
                        <button type="submit" className="btn btn-green">Save</button>
                    </div>
                </form>
            </div>
        );
    }
}

const formName = "editPetForm";

export default reduxForm({
    form: formName,
})(EditPetForm);
