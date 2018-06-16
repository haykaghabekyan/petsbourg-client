import React from "react";

const PetStory = ({ story }) => {
    return (
        <div className="pet-profile pet-story-container">
            <h3 className="pet-profile-title">Pet Story</h3>
            <div className="pet-story">{ story }</div>
        </div>
    );
};

export default PetStory;