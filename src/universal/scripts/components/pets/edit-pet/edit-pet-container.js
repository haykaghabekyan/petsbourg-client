import React from "react";
import { connect } from "react-redux";
import EditPetForm from "./edit-pet-form";
import { updatePet } from "../../../redux/actions/pet";

class EditPetContainer extends React.Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(data) {
        const { pet, updatePet } = this.props;

        updatePet(pet.id, data);
    };

    render () {
        const { petTypes, pet } = this.props;

        return <EditPetForm pet={ pet } petTypes={ petTypes } onSubmit={ this.handleSubmit } />;
    }
}

const mapStateToProps = state => {
    return {
        petTypes: state.petTypes,
    };
};

const actionCreators = {
    updatePet,
};

export default connect(mapStateToProps, actionCreators)(EditPetContainer);
