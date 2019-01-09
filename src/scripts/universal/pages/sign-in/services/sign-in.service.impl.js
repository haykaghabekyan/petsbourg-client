import axios from 'axios';
import { configs} from '../../../../server/utils/config';

export class SignInServiceImpl {
    async signIn(req, res) {
        const { backend } = configs();
        const { email, password } = req.body;

        try {
            const { data: { success, token, user } } = await axios.post(`${backend.url}/api/auth/sign-in`, { email, password });

            res.cookie('jwt', token, { maxAge: 900000 });

            res.send({
                success: success,
                user: user,
            });
        } catch(error) {
            res.status(400).send({
                ...error.response.data
            });
        }
    }
}
