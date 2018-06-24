import React from "react";

const PetStory = ({ story }) => {
    return (
        <div className="pet-profile bg-white">
            <div className="padding-35">
                <h3 className="pet-profile-title">Pet Story</h3>
                <pre className="pet-story">{ story }</pre>
            </div>
        </div>
    );
};

export default PetStory;