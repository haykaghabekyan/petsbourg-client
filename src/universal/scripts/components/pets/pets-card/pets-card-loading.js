import React from "react";

const PetsCardLoading = () => {
    return (
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
    );
};

export default PetsCardLoading;
