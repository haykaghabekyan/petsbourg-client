import axios from 'axios';

export class SignInService {
    static async signIn(data) {
        return axios.post('/api/sign-in', data)
            .then(({ data }) => data);
    }
}
