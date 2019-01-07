import axios from 'axios';

export class PetTypeService {
    async getPetTypes() {
        return axios.get('/api/pet-types')
            .then(response => response.data.petTypes);
    }
}
