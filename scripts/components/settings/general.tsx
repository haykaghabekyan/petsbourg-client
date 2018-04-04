import * as React from "react";
import Input from "../../utils/input";
import { Field, reduxForm, SubmissionError } from "redux-form";
import { required } from "../../utils/validators";

class GeneralSettings extends React.Component<any, any> {
    constructor (props) {
        super (props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit (values) {
        console.log(values);
    }

    render () {
        const {handleSubmit} = this.props;
        return (
            <div>
                <h6>Settings / <span className="h6">General</span></h6>

                <hr/>

                <form onSubmit={ handleSubmit(this.onSubmit) }>
                    <Field name="firstName" id="settingsFirstName" placeholder="First name" component={ Input } validate={ [required] } />

                    <Field name="lastName" id="settingsLastName" placeholder="Last name" component={ Input } validate={ [required] } />

                    <Field name="password" type="password" id="settingsPassword" placeholder="Password" component={ Input } validate={ [required] } />

                    <button type="submit">Save</button>
                </form>
            </div>
        );
    }
}

const formName = "generalForm";

export default reduxForm({ form: formName })(GeneralSettings);
