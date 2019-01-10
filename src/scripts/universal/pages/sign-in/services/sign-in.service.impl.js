import axios from 'axios';
import { configs} from '../../../../server/utils/config';
import { UserService } from '../../../../server/services/user.service';

export class SignInServiceImpl {
    async signIn(req, res) {
        const { backend } = configs();
        const { email, password } = req.body;

        try {
            const { data: { token, user } } = await axios.post(`${ backend.url }/api/auth/sign-in`, { email, password });

            res.cookie('jwt', token, { maxAge: 900000 });

            let pets = null;
            try {
                pets = await UserService.getUserPets(user.id);
            } catch(error) {}

            res.send({
                success: true,
                profile: user,
                pets: pets,
            });
        } catch(error) {
            res.status(400).send({
                ...error.response.data
            });
        }
    }
}
