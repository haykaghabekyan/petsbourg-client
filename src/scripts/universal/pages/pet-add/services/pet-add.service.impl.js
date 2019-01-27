import axios from 'axios';
import { configs } from '../../../../server/utils/config';

export class PetAddServiceImpl {
    static getPetTypes(req, res) {
        const { backend } = configs();

        axios.get(`${ backend.url }/api/pet-types`)
            .then(({ data }) => {
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
        const { backend } = configs();
        const { petTypeId = '' } = req.params;

        axios.get(`${ backend.url }/api/pet-types/${ petTypeId }/breeds`)
            .then(({ data }) => {
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
}
