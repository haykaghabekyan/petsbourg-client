import axios from 'axios';
import { configs} from '../../server/utils/config';

export class UserService {
    async getUser(userId) {
        const { backend } = configs();

        return axios.get(`${ backend.url }/api/users/${ userId }`)
            .then(({ data }) => data.user);
    }
}
