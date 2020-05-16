import axios from 'axios';

export class PetEditService {
  static async load(petId) {
    return axios.get(`${process.env.FRONTEND_URL}/api/pet-edit-page/${petId}`)
      .then(({data}) => data);
  }

  static async update(petId, data) {
    return axios.put(`${process.env.FRONTEND_URL}/api/pet-edit-page/${petId}`, data)
      .then(({data}) => data);
  }
}
