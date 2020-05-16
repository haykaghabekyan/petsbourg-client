import axios from 'axios';

export class PetAddService {
  static loadPetTypes() {
    return axios.get(`${process.env.FRONTEND_URL}/api/pet-add-page/pet-types`)
      .then(({data}) => data);
  }

  static loadPetBreeds(petType) {
    return axios.get(`${process.env.FRONTEND_URL}/api/pet-add-page/pet-types/${petType}/breeds`)
      .then(({data}) => data);
  }

  static savePet(data) {
    return axios.post(`${process.env.FRONTEND_URL}/api/pet-add-page`, data)
      .then(({data}) => data);
  }

}
