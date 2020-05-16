import axios from 'axios';
import {config} from '../../../config/config';

export class PetAddService {
  static loadPetTypes() {
    return axios.get(`${config.frontendUrl}/api/pet-add-page/pet-types`)
      .then(({data}) => data);
  }

  static loadPetBreeds(petType) {
    return axios.get(`${config.frontendUrl}/api/pet-add-page/pet-types/${petType}/breeds`)
      .then(({data}) => data);
  }

  static savePet(data) {
    return axios.post(`${config.frontendUrl}/api/pet-add-page`, data)
      .then(({data}) => data);
  }

}
