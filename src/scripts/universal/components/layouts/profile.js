import React from 'react';
import {UserProfileCard} from '../users/user-profile/user-profile-card';
import {PetsCard} from '../pets/pets-card/pets-card';
import {CreatePetProfileCat} from '../banners/create-pet-profile-cat';

export const ProfileLayout = ({children, user, pets, isEditable = false, selectedPetId = null}) => {
  return (
    <div className="main-layout-page home-container">
      <div className="main-left-sidebar">
        <UserProfileCard user={user} isEditable={isEditable}/>
        <PetsCard pets={pets} selectedPetId={selectedPetId}/>
      </div>
      <div className="main-content">
        {children}
      </div>
      <div className="main-right-sidebar">
        <CreatePetProfileCat/>
      </div>
    </div>
  );
};
