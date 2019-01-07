import axios from 'axios';

class UserService {
    baseUrl = '';

    contrustor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async getUser(userId) {
        return axios.get(`${ this.baseUrl }/users/${ userId }`)
            .then(response => response.data);
    }
}
