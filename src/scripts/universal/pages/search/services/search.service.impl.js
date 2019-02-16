import axios from 'axios';
import { configs } from '../../../../server/utils/config';
import { Router } from 'express';

export class SearchServiceImpl {
    static getRoutes() {
        const router = Router();

        router.get('/', SearchServiceImpl.search);

        return router;
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

        res.send({
            pets: []
        });
    }
}
