import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
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

        return (
            <div className="main-layout-page pets-container">
                <div className="main-left-sidebar">
                    <div className="pet-types-container">
                        <ul className="pet-types-list">
                            {
                                Object.keys(petTypes).map((petType, key) => {
                                    const PetIcon = getPetIcon(petType);

                                    return (
                                        <li key={key}>
                                            <Link to={`/pets/add/${ petType.toLowerCase() }`} className={`pet-type-item ${ petType.toLowerCase() === selectedPetType ? "selected" : "" }`}>
                                                <div className="pet-icon">
                                                    <PetIcon width={30} />
                                                </div>
                                                <div className="pet-name">{ petType }</div>
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
                            breeds={petTypes[capitalize(selectedPetType)]}
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
