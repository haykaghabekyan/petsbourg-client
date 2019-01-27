import { configs } from '../../../../server/utils/config';
import axios from 'axios';

export class PetAddService {
    static loadPetTypes() {
        const { frontend } = configs();

        return axios.get(`${ frontend.url }/api/pet-add-page/pet-types`)
            .then(({ data }) => data);
    }

    static loadPetBreeds(petType) {
        const { frontend } = configs();

        return axios.get(`${ frontend.url }/api/pet-add-page/pet-types/${ petType }/breeds`)
            .then(({ data }) => data);
    }
}
