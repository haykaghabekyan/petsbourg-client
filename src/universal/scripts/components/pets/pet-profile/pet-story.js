import React from "react";

const PetStory = ({ story }) => {
    return (
        <div className="pet-profile-section pets-story-container">
            <h3 className="pet-profile-section-title">Pet Story</h3>
            <div className="pet-story">{ story }</div>
        </div>
    );
};

export default PetStory;