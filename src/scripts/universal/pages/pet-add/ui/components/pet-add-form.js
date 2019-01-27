import React from 'react';
import { required } from '../../../../utils/validators';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../../../components/form-elements/input';
import { Select } from '../../../../components/form-elements/select';

const genderOptions = [{
    name: 'Male',
    value: 'Male'
}, {
    name: 'Female',
    value: 'Female'
}];

const PetAddFormContainer = ({ handleSubmit, submit, dispatch, breeds }) => {
    const breedsOptions = breeds.map(breed => {
        return {
            name: breed.name,
            value: breed._id,
        };
    });

    return (
        <div className="add-pet padding-35">
            <h3 className="add-pet-title">Please, add your pet details</h3>

            <form className="add-pet-form" onSubmit={ handleSubmit(values => submit(values, dispatch)) }>
                <Field name="breed" id="addPetBreed" placeholder="Select breed" options={ breedsOptions } component={ Select } validate={ [required] } />

                <Field name="name" id="addPetName" placeholder="Name" component={ Input } validate={ [required] } />

                <Field name="gender" id="addPetGender" placeholder="Select gender" options={ genderOptions } component={ Select } validate={ [required] } />

                <div className="text-right">
                    <button type="submit" className="btn btn-green">Add</button>
                </div>
            </form>
        </div>
    );
};

export const PetAddForm = reduxForm({ form: 'addPetForm' })(PetAddFormContainer);

