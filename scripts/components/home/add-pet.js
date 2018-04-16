import * as React from "react";
import {Link} from "react-router-dom";
import CatIcon from "../../utils/icons/pets/cat";
import DogIcon from "../../utils/icons/pets/dog";
import BirdIcon from "../../utils/icons/pets/bird";

const AddPetContainer = () => {
    return (
        <div className="pet-types-list-container">
            <h3 className="add-pet-title">Add your Pet</h3>

            <div className="pet-types-list">
                <Link to="/pets/add/dog" className="pet-type-item">
                    <div className="pet-type-icon">
                        <DogIcon width={53} />
                    </div>
                    <p className="pet-type-name">Dog</p>
                </Link>
                <Link to="/pets/add/cat" className="pet-type-item">
                    <div className="pet-type-icon">
                        <CatIcon width={53} />
                    </div>
                    <p className="pet-type-name">Cat</p>
                </Link>
                <Link to="/pets/add/bird" className="pet-type-item">
                    <div className="pet-type-icon">
                        <BirdIcon width={53} />
                    </div>
                    <p className="pet-type-name">Bird</p>
                </Link>
                <Link to="/pets/add" className="pet-type-item">
                    <div className="pet-type-icon">
                        <CatIcon width={53} />
                    </div>
                    <p className="pet-type-name">Cat</p>
                </Link>
                <Link to="/pets/add" className="pet-type-item">
                    <div className="pet-type-icon">
                        <DogIcon width={53} />
                    </div>
                    <p className="pet-type-name">Dog</p>
                </Link>
                <Link to="/pets/add" className="pet-type-item">
                    <div className="pet-type-icon">
                        <CatIcon width={53} />
                    </div>
                    <p className="pet-type-name">Cat</p>
                </Link>
            </div>
        </div>
    );
};

export default AddPetContainer;