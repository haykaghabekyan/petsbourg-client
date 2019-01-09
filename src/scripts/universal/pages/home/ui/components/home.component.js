import React from 'react';
import { AddPetComponent } from './add-pet.component';

export const HomeComponent = ({ pets }) => {
    if (!pets.length) {
        return <AddPetComponent />;
    }

    return <div>This user owns pet(s).</div>;
};
