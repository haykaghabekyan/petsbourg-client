import React from "react";
import PetInfo from "../pet-info/pet-info";
import PetStory from "../pet-story/pet-story";

const UserProfile = ({ pet, isEditable }) => {
    return (
        <div>
            <PetInfo pet={ pet } isEditable={ isEditable } />
            { pet.story && <PetStory story={ pet.story } /> }
        </div>
    );
};

export default UserProfile;
