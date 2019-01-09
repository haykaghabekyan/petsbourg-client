import axios from 'axios';
import { configs} from '../../../../server/utils/config';

export class SignInServiceImpl {
    signIn(req, res) {
        const { backend } = configs();
        const { email, password } = req.body;

        axios.post(`${ backend.url }/api/auth/sign-in`, { email, password })
            .then(({ data }) => {
                res.send({
                    ...data,
                });
            })
            .catch(({ response }) => {
                res.send({
                    ...response.data
                });
            });
    }

    signUp(req, res) {
        const { backend } = configs();
        const { firstName, lastName, email, gender, password } = req.body;

        axios.post(`${ backend.url }/api/auth/sign-up`, { firstName, lastName, email, gender, password })
            .then(({ data }) => {
                res.send({
                    success: true,
                    data: data,
                });
            })
            .catch(({ response }) => {
                res.send({
                    ...response.data
                });
            });
    }
}
