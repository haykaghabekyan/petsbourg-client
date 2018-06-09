import React from "react";

const PetInfo = ({ pet }) => {
    return (
        <div className="pet-profile">
            <div className="pet-profile-content">
                <div className="pet-facts">
                    <div className="pet-facts-picture">
                        <img className="pet-facts-img" src="/media/images/fake-dog/5.jpeg" />
                    </div>
                    <div className="pet-facts-content">
                        <h2 className="pet-facts-name">Bobik</h2>

                        <dl className="pet-facts-list">
                            <dt className="pet-facts-label">Type</dt><dd className="pet-facts-value">Dominic</dd>
                            <dt className="pet-facts-label">Breed</dt><dd className="pet-facts-value">24</dd>
                            <dt className="pet-facts-label">Gender</dt><dd className="pet-facts-value">foo@bar.com</dd>
                        </dl>
                    </div>
                </div>
            </div>
            <div className="pet-info">
                <dl className="pet-info-list">
                    <dt className="pet-info-label">Pet ID</dt>
                    <dd className="pet-info-value">56134561</dd>
                </dl>
                <dl className="pet-info-list">
                    <dt className="pet-info-label">Color</dt>
                    <dd className="pet-info-value">Light brown</dd>
                </dl>
                <dl className="pet-info-list">
                    <dt className="pet-info-label">Age</dt>
                    <dd className="pet-info-value">Young</dd>
                </dl>
                <dl className="pet-info-list">
                    <dt className="pet-info-label">Size</dt>
                    <dd className="pet-info-value">Medium (26-60 lbs, 25 kg)</dd>
                </dl>
            </div>
        </div>
    );
};

export default PetInfo;