import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import find from "lodash/find"
import AddPetForm from "./add-pet-form";
import getPetIcon from "../../utils/icons/pets";
import {addPet} from "../../redux/actions/pets";
import capitalize from "../../utils/helpers/capatalize";

class AddPetContainer extends React.Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(data) {

        const selectedPetType = this.props.match.params.petType || null;

        this.props.addPet({
            ...data,
            type: selectedPetType,
        });
    };

    render () {
        const selectedPetType = this.props.match.params.petType || null;
        const { petTypes } = this.props;

        const breeds = find(petTypes, pT => {
            return pT.name === capitalize(selectedPetType)
        });

        return (
            <div className="main-layout-page pets-container">
                <div className="main-left-sidebar">
                    <div className="pet-types-container">
                        <ul className="pet-types-list">
                            {
                                petTypes.map((petType, key) => {
                                    const PetIcon = getPetIcon(petType.name);

                                    return (
                                        <li key={key}>
                                            <Link to={`/pets/add/${ petType.name.toLowerCase() }`} className={`pet-type-item ${ petType.name.toLowerCase() === selectedPetType ? "selected" : "" }`}>
                                                <div className="pet-icon">
                                                    <PetIcon width={30} />
                                                </div>
                                                <div className="pet-name">{ petType.name }</div>
                                            </Link>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="main-content">
                    { selectedPetType ?
                        <AddPetForm
                            key={selectedPetType}
                            onSubmit={this.handleSubmit}
                            petType={selectedPetType}
                            breeds={breeds.PetBreeds}
                        /> : 'Select pet type' }
                </div>
                <div className="main-right-sidebar" />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        petTypes: state.pets.petTypes
    };
};

const actionCreators = {
    addPet
};

export default connect(mapStateToProps, actionCreators)(AddPetContainer);
