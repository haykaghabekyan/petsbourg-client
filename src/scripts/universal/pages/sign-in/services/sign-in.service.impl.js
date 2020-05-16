import axios from 'axios';
import { UserServiceImpl } from '../../user/services/user.service.impl';

export class SignInServiceImpl {
    static signIn(req, res) {
        const { email, password } = req.body;

        axios.post(`${ process.env.BACKEND_URL }/api/auth/sign-in`, { email, password })
            .then(async ({ data }) => {
                const { token, user } = data;

                res.cookie('jwt', `Bearer: ${ token }`, { maxAge: 900000 });

                let pets = null;
                try {
                    pets = await UserServiceImpl.getUserPets(user._id);
                } catch(error) {}

                res.status(200).send({
                    success: true,
                    user: user,
                    pets: pets,
                });
            })
            .catch(error => {
                res.status(400).send({
                    ...error.response.data
                });
            });
    }
}
