import React from "react";
import { required } from "../../utils/form/validators";
import { Field, reduxForm, SubmissionError } from "redux-form";
import Input from "../../utils/form/input";
import Select from "../../utils/form/select";

const genderOptions = [{
    name: "Male",
    value: "Male"
}, {
    name: "Female",
    value: "Female"
}];

class AddPetForm extends React.Component {
    render() {
        const {handleSubmit, petType, breeds} = this.props;

        const breedsOptions = breeds.map(breed => {
            return {
                name: breed.petBreed,
                value: breed.petBreed
            };
        });

        return (
            <div className="add-pet-form-container">
                <h3 className="add-pet-title">Please, add your pet details</h3>

                <form onSubmit={handleSubmit}>
                    <Field name="breed" id="addPetBreed" placeholder="Select breed" options={ breedsOptions } component={ Select } validate={ [required] } />

                    <Field name="name" id="addPetName" placeholder="Name" component={ Input } validate={ [required] } />

                    <Field name="gender" id="addPetGender" placeholder="Select gender" options={genderOptions} component={ Select } validate={ [required] } />

                    <button type="submit" className="btn btn-green">Add</button>
                </form>
            </div>
        );
    }

}


const formName = "addPetForm";

export default reduxForm({
    form: formName,
    destroyOnUnmount: false,
})(AddPetForm);
