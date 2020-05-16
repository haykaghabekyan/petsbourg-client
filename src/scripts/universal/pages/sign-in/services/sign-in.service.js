import axios from 'axios';
import {config} from '../../../config/config';

export class SignInService {
  static async signIn(data) {
    return axios.post(`${config.frontendUrl}/api/sign-in`, data)
      .then((response) => response.data);
  }
}
