import axios from 'axios';

export class SignUpService {
    async signUn(data) {
        return axios.post('/api/sign-up', data)
            .then(({ data }) => data);
    }
}
