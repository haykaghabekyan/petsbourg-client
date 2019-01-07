import jwt from 'jsonwebtoken';
import { configs } from '../utils/config';
import { UserService } from '../services/user.service';

export const authMiddleware = async (req, res, next) => {
    const { jwtToken = '' } = req.cookies;

    let decodedToken;
    try {
        decodedToken = jwt.verify(jwtToken, configs().auth.jwtToken);
    } catch(error) {
        res.clearCookie('jwtToken');
    }

    if (decodedToken) {
        const userService = new UserService();
        try {
            req.user = await userService.getUser(decodedToken.user._id);
        } catch (e) {}
    }

    next();
};
