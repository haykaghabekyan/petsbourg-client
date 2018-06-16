import React from "react";
import { Link } from "react-router-dom";
import getPetIcon from "../../../utils/icons/pets";

const getPicture = (pet, width=23) => {
    if (pet.picture) {
        return <img src={pet.picture} width={width} alt="" />;
    }

    const PetIcon = getPetIcon(pet.PetType.name);

    return <PetIcon width={width} />;
};

const PetsCard = ({ pets }) => {
    return (
        <div className="pet-types-container">
            <div className="pet-types-title">Pets</div>
            <ul className="pet-types-list">
                {
                    pets.map((pet, key) => {
                        return (
                            <li key={key}>
                                <Link to={`/pets/${ pet.id }`} className={`pet-type-item`}>
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
