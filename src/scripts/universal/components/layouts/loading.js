import React from 'react';
import { CreatePetProfileCat } from '../banners/create-pet-profile-cat';

export const LoadingLayout = () => {
    return (
        <div className="main-layout-page home-container">
            <div className="main-left-sidebar">

                <div className="profile-card">
                    <div className="profile-card--content">
                        <div className="d-flex justify-center">
                            <div className="profile-card--avatar loading d-flex justify-center align-center" />
                        </div>
                        <div className="profile-card--user">
                            <div className="profile-card--name loading">&nbsp;</div>
                        </div>
                    </div>
                </div>

                <div className="pet-types-container">
                    <div className="pet-types-title">
                        <span className="loading">&nbsp;</span>
                    </div>
                    <ul className="pet-types-list">
                        <li>
                            <div className="pet-type-item">
                                <div className="pet-icon">
                                    <span className="pet-circle loading">&nbsp;</span>
                                </div>
                                <div className="pet-name loading">&nbsp;</div>
                            </div>
                        </li>
                        <li>
                            <div className="pet-type-item">
                                <div className="pet-icon">
                                    <span className="pet-circle loading">&nbsp;</span>
                                </div>
                                <div className="pet-name loading">&nbsp;</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="main-content" />
            <div className="main-right-sidebar">
                <CreatePetProfileCat />
            </div>
        </div>
    );
};
