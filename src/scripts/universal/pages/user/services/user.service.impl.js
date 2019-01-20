import axios from 'axios';
import { configs } from '../../../../server/utils/config';

export class UserServiceImpl {
    static loadUserPage(req, res) {
        const { userId = '' } = req.params;

        const userPromise = UserServiceImpl.getUser(userId);
        const petsPromise = UserServiceImpl.getUserPets(userId);

        Promise.all([ userPromise, petsPromise ]).then(([ user, pets ]) => {
            res.send({
                success: true,
                user,
                pets,
            });
        }).catch(error => {
            res.send({
                success: false,
                errors: {
                    message: 'qaq'
                }
            });
        });
    }

    static async getUser(userId) {
        const { backend } = configs();

        return axios.get(`${ backend.url }/api/users/${ userId }`)
            .then(({ data }) => data.user);
    }

    static async getUserPets(userId) {
        const { backend } = configs();
        
        return axios.get(`${ backend.url }/api/users/${ userId }/pets`)
            .then(({ data }) => data.pets);
    }
}
