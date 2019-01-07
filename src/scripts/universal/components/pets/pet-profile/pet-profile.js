import React from "react";
import PetInfo from "../pet-info/pet-info";
import PetStory from "../pet-story/pet-story";

const PetProfile = ({ pet, isEditable }) => {
    return (
        <div>
            <PetInfo petProfile={ pet.profile } isEditable={ isEditable } />
            { pet.profile.story && <PetStory story={ pet.profile.story } /> }
        </div>
    );
};

export default PetProfile;
