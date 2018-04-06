import * as React from "react";
import { required } from "../../utils/validators";
import { Field, reduxForm, SubmissionError } from "redux-form";
import Input from "../../utils/input";
import Select from "../../utils/select";

const genderOptions = [{
    name: "Male",
    value: "Male"
}, {
    name: "Female",
    value: "Female"
}];


class AddPetForm extends React.Component<any, any> {

    constructor(props) {
        super(props);
    }

    render() {
        const {handleSubmit} = this.props;

        return (
            <div>
                <h2>Add pet</h2>
                <form onSubmit={handleSubmit}>

                    <Field name="breed" id="addPetBreed" placeholder="Select breed" options={[]} component={ Select } validate={ [required] } />

                    <Field name="name" id="addPetName" placeholder="Name" component={ Input } validate={ [required] } />

                    <Field name="gender" id="addPetGender" placeholder="Select gender" options={genderOptions} component={ Select } validate={ [required] } />


                    <button type="submit" className="btn btn-green">Add</button>
                </form>
            </div>
        );
    }

}


const formName = "addPetForm";

export default reduxForm({ form: formName })(AddPetForm);
