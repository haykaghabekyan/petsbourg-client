import axios from 'axios';
import {config} from '../../../config/config';

export class SignUpService {
    static async signUp(data) {
        return axios.post(`${config.frontendUrl}/api/sign-up`, data)
            .then(({ data }) => data);
    }
}
