import { verify } from 'jsonwebtoken';
import { configs } from '../utils/config';
import { UserService } from '../services/user.service';

export const authMiddleware = async (req, res, next) => {
    const { jwt = '' } = req.cookies;

    let decodedToken;
    try {
        decodedToken = verify(jwt, configs().auth.publicKey);
    } catch(error) {
        res.clearCookie('jwt');
    }

    if (decodedToken) {
        let user;
        let pets;

        try {
            user = await UserService.getUser(decodedToken.user.id);
            pets = await UserService.getUserPets(decodedToken.user.id);

            req.me = {
                profile: user,
                pets: pets,
            };
        } catch (error) {}
    }

    next();
};
