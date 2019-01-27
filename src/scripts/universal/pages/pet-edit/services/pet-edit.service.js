import axios from 'axios';
import { configs } from '../../../../server/utils/config';

export class PetEditService {
    static async loadPetPage(petId) {
        const { frontend } = configs();

        return axios.get(`${ frontend.url }/api/pet-page/${ petId }`)
            .then(({ data }) => data);
    }
}
