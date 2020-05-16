import axios from 'axios';

export class SignUpServiceImpl {
    static signUp(req, res) {
        const { firstName, lastName, email, gender, password } = req.body;

        axios.post(`${ process.env.BACKEND_URL }/api/auth/sign-up`, { firstName, lastName, email, gender, password })
            .then(({ data }) => {
                const { token, user } = data;

                res.cookie('jwt', `Bearer: ${ token }`, { maxAge: 900000 });

                res.status(200).send({
                    success: true,
                    user: user,
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
