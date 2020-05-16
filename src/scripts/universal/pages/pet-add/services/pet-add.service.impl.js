import axios from 'axios';
import {Router} from 'express';
import {requireAuthMiddleware} from '../../../../server/middlewares/require-auth.middleware';

export class PetAddServiceImpl {
  static getRoutes() {
    const router = Router();

    router.get('/pet-types/:petTypeId/breeds', requireAuthMiddleware, PetAddServiceImpl.getPetBreeds);
    router.get('/pet-types', requireAuthMiddleware, PetAddServiceImpl.getPetTypes);
    router.post('/', PetAddServiceImpl.savePet);

    return router;
  }

  static getPetTypes(req, res) {
    axios.get(`${process.env.BACKEND_URL}/api/pet-types`)
      .then(({data}) => {
        res.send({
          success: true,
          petTypes: data.petTypes,
        });
      })
      .catch(() => {
        res.status(400).send({
          success: false,
          errors: {
            message: 'Something went wrong.'
          }
        });
      });
  }

  static getPetBreeds(req, res) {
    const {petTypeId = ''} = req.params;

    axios.get(`${process.env.BACKEND_URL}/api/pet-types/${petTypeId}/breeds`)
      .then(({data}) => {
        res.send({
          success: true,
          petBreeds: data.petBreeds,
        });
      })
      .catch(() => {
        res.status(400).send({
          success: false,
          errors: {
            message: 'Something went wrong.'
          }
        });
      });
  }

  static savePet(req, res) {
    const {body, cookies} = req;

    axios.post(`${process.env.BACKEND_URL}/api/pets`, body, {
      headers: {
        authorization: cookies.jwt ? cookies.jwt : ''
      },
    }).then(({data}) => {
      res.status(200).send({
        success: true,
        pet: data.pet,
      });
    }).catch((error) => {
      res.status(400).send({
        success: false,
        errors: {
          message: 'Something went wrong.'
        }
      });
    });
  }
}
