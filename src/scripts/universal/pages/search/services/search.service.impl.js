import axios from 'axios';
import { configs } from '../../../../server/utils/config';
import { Router } from 'express';

export class SearchServiceImpl {
    static getRoutes() {
        const router = Router();

        router.get('/', SearchServiceImpl.load);
        router.get('/search', SearchServiceImpl.search);

        return router;
    }

    static async load(req, res) {
        const { backend } = configs();
        const { petType = null } = req.query;
        let pets;
        let petTypes;
        let petBreeds = [];

        try {
            const { data } = await axios.get(`${ backend.url }/api/pet-types`);

            petTypes = data.petTypes.map(petType => {
                return {
                    name: petType.name,
                    value: petType._id,
                };
            });
        } catch (error) {}

        if (petType) {
            const { data } = await axios.get(`${ backend.url }/api/pet-types/${ petType }/breeds`);

            petBreeds = data.petBreeds.map(petBreed => {
                return {
                    name: petBreed.name,
                    value: petBreed._id,
                };
            });
        }

        try {
            const { data } = await axios.get(`${ backend.url }/api/search`, {
                params: req.query,
            });

            pets = data.pets;
        } catch (e) {}

        res.send({
            success: true,
            petTypes: petTypes,
            petBreeds: petBreeds,
            pets: pets,
        });
    }

    static async search(req, res) {
        const { backend } = configs();

        try {
            const { data } = await axios.get(`${ backend.url }/api/search`, {
                params: req.query,
            });

            res.send({
                success: true,
                pets: data.pets,
            });
        } catch (e) {
            res
                .status(400)
                .send({
                    success: false,
                    errors: {
                        message: 'Something went wrong.',
                    }
                });
        }
    }
}
