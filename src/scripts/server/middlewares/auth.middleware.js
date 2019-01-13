import { verify } from 'jsonwebtoken';
import { configs } from '../utils/config';
import { UserServiceImpl } from '../../universal/pages/user';

export const authMiddleware = async (req, res, next) => {
    const { jwt = '' } = req.cookies;

    let decodedToken;
    try {
        decodedToken = verify(jwt, configs().auth.publicKey);
    } catch(error) {
        res.clearCookie('jwt');
    }

    if (decodedToken) {
        try {
            const user = await UserServiceImpl.getUser(decodedToken.user.id);
            const pets = await UserServiceImpl.getUserPets(decodedToken.user.id);

            req.me = {
                profile: user,
                pets: pets,
            };
        } catch (error) {}
    }

    next();
};
