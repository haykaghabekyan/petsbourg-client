import axios from 'axios';
import { configs } from '../../../../server/utils/config';
import { UserServiceImpl } from '../../user/services/user.service.impl';

export class PetServiceImpl {
    static async load(req, res) {
        const { petId = '' } = req.params;

        let pet;
        try {
            pet = await PetServiceImpl.getPet(petId);
        } catch(error) {
            res.status(400).send({
                success: false,
                errors: {
                    message: 'Something went wrong.',
                }
            });
        }

        if (!pet) {
            return res.status(404).send({
                success: false,
                errors: {
                    message: 'Pet not found.',
                }
            });
        }

        const userPromise = UserServiceImpl.getUser(pet.owner);
        const petsPromise = UserServiceImpl.getUserPets(pet.owner);

        Promise.all([ userPromise, petsPromise ])
            .then(([ user, pets ]) => {
                res.send({
                    success: true,
                    pet: pet,
                    user: user,
                    pets: pets,
                });
            }).catch(() => {
            res.send({
                success: false,
                errors: {
                    message: 'Something went wrong.'
                }
            });
        });
    }

    static async getPet(petId) {
        const { backend } = configs();

        return axios.get(`${ backend.url }/api/pets/${ petId }`)
            .then(({ data }) => data.pet);
    }
}
