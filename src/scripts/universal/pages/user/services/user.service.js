import axios from 'axios';
import { configs } from '../../../../server/utils/config';

export class UserService {
    static async loadUserPage(userId) {
        const { frontend } = configs();

        return axios.get(`${ frontend.url }/api/user-page/${ userId }`)
            .then(({ data }) => data);
    }
}
