import axios from 'axios';
import { configs} from '../../server/utils/config';

export class UserService {
    static async getUser(userId) {
        const { backend } = configs();

        return axios.get(`${ backend.url }/api/users/${ userId }`)
            .then(({ data }) => data.user);
    }

    static async getUserPets(userId) {
        const { backend } = configs();

        let pets = null;
        try {
            const { data } = await axios.get(`${ backend.url }/api/users/${ userId }/pets`);
            pets = data.pets;
        } catch(error) {}

        return pets;
    }
}
