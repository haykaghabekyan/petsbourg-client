import axios from 'axios';
import {config} from '../../../config/config';

export class UserEditService {
  static async userEditPageSave(userId, data) {
    return axios.put(`${config.frontendUrl}/api/user-edit-page/${userId}`, data)
      .then(({data}) => data);
  }
}
