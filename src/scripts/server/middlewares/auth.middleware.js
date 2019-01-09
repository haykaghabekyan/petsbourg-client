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
        const userService = new UserService();
        try {
            req.user = await userService.getUser(decodedToken.user.id);
        } catch (error) {
            req.user = null;
        }
    }

    next();
};
