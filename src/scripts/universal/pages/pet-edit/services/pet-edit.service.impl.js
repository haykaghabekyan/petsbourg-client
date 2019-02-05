import axios from 'axios';
import { UserServiceImpl } from '../../user/services/user.service.impl';
import { PetServiceImpl } from '../../pet/services/pet.service.impl';
import { configs } from '../../../../server/utils/config';

export class PetEditServiceImpl {
    static async loadPetEditPage(req, res) {
        const { petId = '' } = req.params;

        let pet;
        try {
            pet = await PetServiceImpl.getPet(petId);
        } catch(error) {
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

        Promise.all([ userPromise, petsPromise, petBreedsPromise ])
            .then(([ user, pets, petBreeds ]) => {
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
        const { backend } = configs();
        return axios.get(`${ backend.url }/api/pet-types/${ petType }/breeds`)
            .then(({ data}) => data.breeds );
    }
}
