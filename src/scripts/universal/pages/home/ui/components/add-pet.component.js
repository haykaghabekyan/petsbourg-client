import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import getPetIcon from '../../../../utils/icons/pets';

const AddPet = ({ petTypes }) => {
    return (
        <div className="pet-types-list-container">
            <h3 className="add-pet-title">Add your Pet</h3>
            <div className="pet-types-list">
                {
                    petTypes.map(petType => {
                        const PetIcon = getPetIcon(petType.name);

                        return (
                            <Link key={petType._id} to={ { pathname: "/pets/add", petType: petType._id } } className="pet-type-item">
                                <div className="pet-type-icon">
                                    <PetIcon width={ 53 } />
                                </div>
                                <p className="pet-type-name">{ petType.name }</p>
                            </Link>
                        );
                    })
                }
            </div>
        </div>
    );
};

const mapStateToProps = state => ({ petTypes: state.petTypes });
export const AddPetComponent = connect(mapStateToProps)(AddPet);
