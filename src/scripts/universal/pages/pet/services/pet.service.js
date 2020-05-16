import axios from 'axios';

export class PetService {
  static loadPetPage(petId) {
    return axios.get(`${process.env.FRONTEND_URL}/api/pet-page/${petId}`)
      .then(({data}) => data);
  }
}
