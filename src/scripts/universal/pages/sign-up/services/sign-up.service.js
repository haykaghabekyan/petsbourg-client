import axios from 'axios';

export class SignUpService {
    static async signUp(data) {
        return axios.post('/api/sign-up', data)
            .then(({ data }) => data);
    }
}
