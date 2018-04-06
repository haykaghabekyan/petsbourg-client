import * as React from "react";
import {connect} from "react-redux";
import AddPetForm from "./add-pet-form";
import {getPetTypes} from "../../redux/actions/pets";

class AddPetContainer extends React.Component<any, any> {

    constructor(props) {
        super (props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.getPetTypes();
    }

    handleSubmit(data): void {
        console.log(data);
    }

    render () {
        return (
            <div className="add-pet-container">
                <div className="pet-types-container">

                </div>
                <div className="add-pet-form-container">

                    <AddPetForm onSubmit={this.handleSubmit} />

                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        petTypes: state.pets.petTypes,
        petBreeds: state.pets.petBreeds
    };
};

const actionCreators = {
    getPetTypes
};

export default connect(mapStateToProps, actionCreators)(AddPetContainer);
