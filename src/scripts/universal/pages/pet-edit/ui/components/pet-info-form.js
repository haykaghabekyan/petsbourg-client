import React from 'react';
import moment from 'moment';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../../../utils/validators';
import { Input } from '../../../../components/form-elements/input';
import { Select } from '../../../../components/form-elements/select';
import { Datepicker } from '../../../../components/form-elements/datepicker';
import { Textarea } from '../../../../components/form-elements/textarea';
import { GENDER_OPTIONS } from '../../../../constants/gender-options';
// import UploadPetPicture from './pet-photo-upload';

class PetInfoFormComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const { pet } = this.props;

        this.props.initialize({
            name: pet.name,
            petId: pet._id,
            passportId: pet.passportId,
            gender: pet.gender,
            story: pet.story,
            birthday: pet.birthday,
            size: pet.size,
            color: pet.color,
            type: pet.type._id,
            breed: pet.breed._id,
        });
    }

    render() {
        const { handleSubmit, submit, dispatch, invalid, submitting, petTypes, petBreeds } = this.props;

        const petTypesOptions = petTypes.map(petType => {
            return {
                name: petType.name,
                value: petType._id,
            };
        });

        const petBreedsOptions = petBreeds.map(petBreed => {
            return {
                name: petBreed.name,
                value: petBreed._id,
            };
        });

        return (
            <div className="edit-pet bg-white padding-35">
                <h3>Complete your pet profile</h3>

                {/*<UploadPetPicture petProfile={ pet.profile } />*/}

                <form onSubmit={ handleSubmit(values => submit(values, dispatch)) } className="edit-pet-form">
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
                                <Field disabled name="type" placeholder="Select type" options={ petTypesOptions } component={ Select } validate={ [required] } />
                            </div>
                            <div className="col-6">
                                <Field name="breed" placeholder="Select breed" options={ petBreedsOptions } component={ Select } validate={ [required] } />
                            </div>
                        </div>

                        <div className="d-flex row">
                            <div className="col-6">
                                <Field name="gender" placeholder="Select gender" options={ GENDER_OPTIONS } component={ Select } validate={ [] } />
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
                                <Field name="birthday" id="editPetBirthday" placeholder="Birthday" component={ Datepicker } validate={ [] } />
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
                        <button
                            type="submit"
                            className="btn btn-green"
                            disabled={ invalid || submitting }
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export const PetInfoForm = reduxForm({ form: 'editPetForm' })(PetInfoFormComponent);
