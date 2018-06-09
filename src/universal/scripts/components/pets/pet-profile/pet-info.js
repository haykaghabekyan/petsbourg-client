import React from "react";

const PetInfo = ({ pet }) => {
    return (
        <div className="pet-profile">
            <div className="pet-profile-content">
                <div className="pet-info">
                    <div className="pet-info-picture">
                        <img className="pet-info-img" src="/media/images/fake-dog/5.jpeg" />
                    </div>
                    <div className="pet-info-content">
                        <h2 className="pet-info-name">Bobik</h2>

                        <dl className="pet-info-list">
                            <dt className="pet-info-label">Type</dt><dd className="pet-info-value">Dominic</dd>
                            <dt className="pet-info-label">Breed</dt><dd className="pet-info-value">24</dd>
                            <dt className="pet-info-label">Gender</dt><dd className="pet-info-value">foo@bar.com</dd>
                        </dl>
                    </div>
                </div>
            </div>
            <div className="pet-info">
                <div>
                    Color
                </div>
            </div>
        </div>
    );
};

export default PetInfo;