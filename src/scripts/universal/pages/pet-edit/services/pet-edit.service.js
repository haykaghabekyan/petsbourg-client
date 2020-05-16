import axios from 'axios';
import {config} from '../../../config/config';

export class PetEditService {
  static async load(petId) {
    return axios.get(`${config.frontendUrl}/api/pet-edit-page/${petId}`)
      .then(({data}) => data);
  }

  static async update(petId, data) {
    return axios.put(`${config.frontendUrl}/api/pet-edit-page/${petId}`, data)
      .then(({data}) => data);
  }
}
