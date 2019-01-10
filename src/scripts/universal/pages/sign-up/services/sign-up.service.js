import axios from 'axios';

export class SignUpService {
    async signUp(data) {
        return axios.post('/api/sign-up', data)
            .then(({ data }) => data);
    }
}
