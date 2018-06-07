import React from "react";

const PetInfo = ({ pet }) => {
    return (
        <div className="pet-profile-section pets-story-container">
            <div className="pet-profile-section-content pet-info">
                <div className="pet-profile-picture">
                    <img src="/media/images/fake-dog/5.jpeg" />
                </div>
                <div>
                    <h2>Bobik</h2>

                    <dl>
                        <dt>First Name</dt><dd>Dominic</dd>
                        <dt>Age</dt><dd>24</dd>
                        <dt>E-mail</dt><dd>foo@bar.com</dd>
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default PetInfo;