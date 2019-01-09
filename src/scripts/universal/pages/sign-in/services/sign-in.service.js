import axios from 'axios';

export class SignInService {
    async signIn(data) {
        return axios.post('/api/sign-in', data)
            .then(({ data }) => data);
    }
}
