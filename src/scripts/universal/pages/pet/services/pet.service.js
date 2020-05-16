import axios from 'axios';
import {config} from '../../../config/config'

export class PetService {
  static loadPetPage(petId) {
    return axios.get(`${config.frontendUrl}/api/pet-page/${petId}`)
      .then((response) => response.data);
  }
}
