import axios from 'axios';
import { configs } from '../../../../server/utils/config';

export class UserEditService {
    static async userEditPageSave(userId, data) {
        const { frontend } = configs();

        return axios.put(`${ frontend.url }/api/user-edit-page/${ userId }`, data)
            .then(({ data }) => data);
    }
}
