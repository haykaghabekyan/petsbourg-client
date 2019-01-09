import axios from 'axios';

export class UserService {
    async getUser(userId) {
        return axios.get(`/api/users/${ userId }`)
            .then(({ data }) => data.user);
    }
}
