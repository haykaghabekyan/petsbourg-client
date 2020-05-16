import axios from 'axios';

export class UserEditService {
    static async userEditPageSave(userId, data) {
        return axios.put(`${ process.env.FRONTEND_URL }/api/user-edit-page/${ userId }`, data)
            .then(({ data }) => data);
    }
}
