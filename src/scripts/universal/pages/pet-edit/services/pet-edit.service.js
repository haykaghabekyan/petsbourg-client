import axios from 'axios';
import { configs } from '../../../../server/utils/config';

export class PetEditService {
    static async load(petId) {
        const { frontend } = configs();

        return axios.get(`${ frontend.url }/api/pet-edit-page/${ petId }`)
            .then(({ data }) => data);
    }

    static async update(petId, data) {
        const { frontend } = configs();

        return axios.put(`${ frontend.url }/api/pet-edit-page/${ petId }`, data)
            .then(({ data }) => data);
    }
}
