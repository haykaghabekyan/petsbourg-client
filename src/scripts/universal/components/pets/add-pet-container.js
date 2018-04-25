import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import AddPetForm from "./add-pet-form";
import getPetIcon from "../../utils/icons/pets";

const PetTypeItem = ({ petType, selected }) => {
    const PetIcon = getPetIcon(petType);

    return (
        <li>
            <Link to={`/pets/add/${ petType.toLowerCase() }`} className={`pet-type-item ${ selected ? "selected" : "" }`}>
                <div className="pet-icon">
                    <PetIcon width={30} />
                </div>
                <div className="pet-name">{ petType }</div>
            </Link>
        </li>
    );
};

const capitalize = str => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

class AddPetContainer extends React.Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(data) {
        console.log(data);
    };

    render () {
        const selectedPetType = this.props.match.params.petType || null;
        const { petTypes } = this.props;

        return (
            <div className="main-layout-page pets-container">
                <div className="main-left-sidebar pet-types-container">
                    <ul className="pet-types-list">
                        {
                            Object.keys(petTypes).map(petType => {
                                return (
                                    <PetTypeItem
                                        key={petType}
                                        petType={petType}
                                        selected={ petType.toLowerCase() === selectedPetType }
                                    />
                                );
                            })
                        }
                    </ul>
                </div>
                <div className="main-content">
                    { selectedPetType ? <AddPetForm key={selectedPetType} onSubmit={this.handleSubmit} petType={selectedPetType} breeds={petTypes[capitalize(selectedPetType)]} /> : 'Select pet type' }
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

export default connect(mapStateToProps)(AddPetContainer);
