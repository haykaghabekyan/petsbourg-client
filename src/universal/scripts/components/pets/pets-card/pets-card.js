import React from "react";
import { Link } from "react-router-dom";
import getPetIcon from "../../../utils/icons/pets";

const getPicture = (pet, width=23) => {
    if (pet.profilePicture) {
        return <img src={ pet.profilePicture } width={ width } alt="" />;
    }

    const PetIcon = getPetIcon(pet.type.name);

    return <PetIcon width={ width } />;
};

const PetsCard = ({ pets, selectedPetId }) => {
    return (
        <div className="pet-types-container">
            <div className="pet-types-title">Pets</div>
            <ul className="pet-types-list">
                {
                    pets.map((pet, key) => {
                        return (
                            <li key={ key }>
                                <Link to={`/pets/${ pet._id }`} className={`pet-type-item ${ pet && pet._id === selectedPetId ? 'selected' : '' }`}>
                                    <div className="pet-icon">
                                        { getPicture(pet) }
                                    </div>
                                    <div className="pet-name">{ pet.name }</div>
                                </Link>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
};

export default PetsCard;
