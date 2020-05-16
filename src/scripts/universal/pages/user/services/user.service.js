import axios from 'axios';
import {config} from '../../../config/config';

export class UserService {
  static async loadUserPage(userId) {
    return axios.get(`${config.frontendUrl}/api/user-page/${userId}`)
      .then(({data}) => data);
  }
}
