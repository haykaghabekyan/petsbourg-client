import axios from 'axios';
import { configs} from '../../../../server/utils/config';

export class SignUpServiceImpl {
    static signUp(req, res) {
        const { backend } = configs();
        const { firstName, lastName, email, gender, password } = req.body;

        axios.post(`${ backend.url }/api/auth/sign-up`, { firstName, lastName, email, gender, password })
            .then(({ data }) => {
                const { success, token, user } = data;

                res.cookie('jwt', token, { maxAge: 900000 });

                res.send({
                    success: success,
                    profile: user,
                    pets: null,
                });
            })
            .catch(error => {
                res.status(400).send({
                    ...error.response.data
                });
            });
    }
}
