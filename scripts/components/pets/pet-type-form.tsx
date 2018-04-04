import * as React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import { Field, reduxForm, SubmissionError } from "redux-form";
import Input from "../../utils/input";
import {required} from "../../utils/validators";

const genders = [{
    name: "Male",
    value: "Male"
}, {
    name: "Female",
    value: "Female"
}];

class PetTypeForm extends React.Component<any, any> {
    render () {
        const {handleSubmit, petType} = this.props;

        return (
            <div className="p-3">

                <h5 className="text-center">{petType.name}</h5>

                <form onSubmit={handleSubmit}>

                    <Field name="name" id={petType.name + "Name"} placeholder="Name" component={ Input } validate={ [required] } />

                    <div className="row">
                        <div className="col-6">
                            {/*<SelectElement required updateFormElement={props.updateFormElement} name="breed" id="breed" options={petType.breeds} placeholder="Select breed" formControlClasses="form-control-sm" />*/}
                        </div>
                        <div className="col-6">
                            {/*<SelectElement required updateFormElement={props.updateFormElement} name="gender" id={petType.name + "Gender"} options={genders} placeholder="Select gender" formControlClasses="form-control-sm" />*/}
                        </div>
                    </div>

                    <p className="small">By clicking Add, you agree to the <Link to="/terms/pets">Petsbourg Terms</Link>.</p>

                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        form: props.petType.name,
    };
};

export default connect(mapStateToProps)(reduxForm({ enableReinitialize: true, })(PetTypeForm));
