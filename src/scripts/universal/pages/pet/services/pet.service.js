import axios from 'axios';

export class PetService {
  static loadPetPage(petId) {
    return axios.get(`/api/pet-page/${petId}`)
      .then(({data}) => data);
  }
}
