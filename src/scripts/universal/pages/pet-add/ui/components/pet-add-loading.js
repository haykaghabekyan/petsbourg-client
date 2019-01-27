import React from 'react';
import { CreatePetProfileDog } from '../../../../components/banners';

const petTypeLoading = key => {
    return (
        <li key={ key }>
            <div className="pet-type-item">
                <div className="pet-icon">
                    <span className="pet-circle loading">&nbsp;</span>
                </div>
                <div className="pet-name loading">&nbsp;</div>
            </div>
        </li>
    );
};

export const PetAddLoading = () => {
    return (
        <div className="main-layout-page add-pet-page">
            <div className="main-left-sidebar">
                <div className="pet-types-container">
                    <ul className="pet-types-list">
                        { [1, 2, 3, 4].map((i) => petTypeLoading(i)) }
                    </ul>
                </div>
            </div>
            <div className="main-content bg-white">

            </div>
            <div className="main-right-sidebar">
                <CreatePetProfileDog />
            </div>
        </div>
    );
};
