import * as React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import getPetIcon from "../../utils/icons/pets";

const HomeAddPet = ({ petTypes }) => {
    return (
        <div className="pet-types-list-container">
            <h3 className="add-pet-title">Add your Pet</h3>

            <div className="pet-types-list">
                {
                    Object.keys(petTypes).map(petType => {

                        const PetIcon = getPetIcon(petType);

                        return (
                            <Link key={petType} to={`/pets/add/${ petType.toLowerCase() }`} className="pet-type-item">
                                <div className="pet-type-icon">
                                    <PetIcon width={53} />
                                </div>
                                <p className="pet-type-name">{ petType }</p>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        petTypes: state.pets.petTypes
    };
};

export default connect(mapStateToProps)(HomeAddPet);