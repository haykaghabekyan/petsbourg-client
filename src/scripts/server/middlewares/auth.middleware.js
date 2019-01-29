import { verify } from 'jsonwebtoken';
import { configs } from '../utils/config';
import { UserServiceImpl } from '../../universal/pages/user/services/user.service.impl';

export const authMiddleware = async (req, res, next) => {
    const { jwt = null } = req.cookies;

    if (jwt) {
        const bearer = decodeURIComponent(jwt).split('Bearer: ');
        const jwtToken = bearer[1] ? bearer[1] : null;

        let decodedToken;
        try {
            decodedToken = verify(jwtToken, configs().auth.publicKey);

            res.cookie('jwt', jwt, { maxAge: 900000 });
        } catch(error) {
            res.clearCookie('jwt');
        }

        if (decodedToken) {
            try {
                const user = await UserServiceImpl.getUser(decodedToken.user._id);
                const pets = await UserServiceImpl.getUserPets(decodedToken.user._id);

                req.auth = {
                    user,
                    pets,
                };
            } catch (error) {}
        }
    }

    next();
};
