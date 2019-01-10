import axios from 'axios';
import { configs} from '../../../../server/utils/config';

export class SignUpServiceImpl {
    async signUp(req, res) {
        const { backend } = configs();
        const { firstName, lastName, email, gender, password } = req.body;

        try {
            const { data: { success, token, user } } = await axios.post(`${ backend.url }/api/auth/sign-up`, { firstName, lastName, email, gender, password });

            res.cookie('jwt', token, { maxAge: 900000 });

            res.send({
                success: success,
                profile: user,
                pets: null,
            });
        } catch(error) {
            res.status(400).send({
                ...error.response.data
            });
        }
    }
}
