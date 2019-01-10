import axios from 'axios';
import { configs } from '../utils/config';

export class PetTypeService {
    static async getPetTypes() {
        const { backend } = configs();
        let petTypes;
        try {
            const { data } = await axios.get(`${ backend.url }/api/pet-types`);
            petTypes = data.petTypes;
        } catch(error) {}

        return petTypes;
    }
}
