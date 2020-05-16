import axios from 'axios';

export class UserService {
    static async loadUserPage(userId) {
        return axios.get(`${ process.env.FRONTEND_URL }/api/user-page/${ userId }`)
            .then(({ data }) => data);
    }
}
