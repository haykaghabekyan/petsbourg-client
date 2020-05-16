import axios from 'axios';
import {UserServiceImpl} from '../../user/services/user.service.impl';
import {PetServiceImpl} from '../../pet/services/pet.service.impl';
import {Router} from "express";
import {requireAuthMiddleware} from "../../../../server/middlewares/require-auth.middleware";

export class PetEditServiceImpl {
  static getRoutes() {
    const router = Router();

    router.get('/:petId', requireAuthMiddleware, PetEditServiceImpl.load);
    router.put('/:petId', requireAuthMiddleware, PetEditServiceImpl.update);

    return router;
  }

  static async load(req, res) {
    const {petId = ''} = req.params;

    let pet;
    try {
      pet = await PetServiceImpl.getPet(petId);
    } catch (error) {
      res.status(400).send({
        success: false,
        errors: {
          message: 'Something went wrong.'
        }
      });
    }

    if (!pet) {
      return res.status(404).send({
        success: false,
        errors: {
          message: 'Something went wrong.'
        }
      });
    }

    const userPromise = UserServiceImpl.getUser(pet.owner);
    const petsPromise = UserServiceImpl.getUserPets(pet.owner);
    const petBreedsPromise = PetEditServiceImpl.getBreedsByType(pet.type._id);

    Promise.all([userPromise, petsPromise, petBreedsPromise])
      .then(([user, pets, petBreeds]) => {
        res.send({
          success: true,
          pet,
          user,
          pets,
          petBreeds,
        });
      }).catch(() => {
      res.status(400).send({
        success: false,
        errors: {
          message: 'Something went wrong.'
        }
      });
    });
  }

  static getBreedsByType(petType) {
    return axios.get(`${process.env.BACKEND_URL}/api/pet-types/${petType}/breeds`)
      .then(({data}) => data.petBreeds);
  }

  static update(req, res) {
    const {params, body, cookies} = req;

    axios
      .put(`${process.env.BACKEND_URL}/api/pets/${params.petId}`, body, {
        headers: {
          authorization: cookies.jwt ? cookies.jwt : ''
        },
      }).then(({data}) => {
      const {pet} = data;

      res.send({
        success: true,
        pet,
      });
    }).catch(() => {
      res.status(400).send({
        success: false,
        errors: {
          message: 'Something went wrong.'
        }
      });
    });
  }
}
