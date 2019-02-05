import { UserServiceImpl } from '../../user/services/user.service.impl';
import { PetServiceImpl } from '../../pet/services/pet.service.impl';

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

        Promise.all([ userPromise, petsPromise ])
            .then(([ user, pets ]) => {
                res.send({
                    success: true,
                    pet: pet,
                    user: user,
                    pets: pets,
                    petTypes: [],
                    petBreeds: [],
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
