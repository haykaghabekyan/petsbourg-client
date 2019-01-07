import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import find from "lodash/find"
import AddPetForm from "./add-pet-form";
import AddPetChooseType from "./add-pet-choose-type";
import getPetIcon from "../../../utils/icons/pets";
import { addPet } from "../../../redux/actions/pet";
import CreatePetProfileDog from "../../../utils/banners/create-pet-profile-dog";

class AddPetContainer extends React.Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(data) {
        const selectedPetType = this.props.location.petType || null;

        this.props.addPet({
            ...data,
            type: selectedPetType,
        });
    };

    render () {
        const selectedPetType = this.props.location.petType || null;
        const { petTypes } = this.props;

        const breeds = find(petTypes, pT => {
            return pT._id === selectedPetType
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
                                            <Link to={{
                                                pathname: "/pets/add",
                                                petType: petType._id,
                                            }} className={`pet-type-item ${ petType._id === selectedPetType ? "selected" : "" }`}>
                                                <div className="pet-icon">
                                                    <PetIcon width={ 30 } />
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

                <div className="main-content bg-white">
                    { !selectedPetType ? <AddPetChooseType /> : <AddPetForm key={ selectedPetType } onSubmit={this.handleSubmit} petType={ selectedPetType } breeds={breeds.breeds} /> }
                </div>

                <div className="main-right-sidebar">
                    <CreatePetProfileDog />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        petTypes: state.petTypes,
    };
};

const actionCreators = {
    addPet,
};

export default connect(mapStateToProps, actionCreators)(AddPetContainer);
