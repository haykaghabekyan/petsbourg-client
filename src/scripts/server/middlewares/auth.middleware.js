import { verify } from 'jsonwebtoken';
import { UserServiceImpl } from '../../universal/pages/user/services/user.service.impl';

export const authMiddleware = async (req, res, next) => {
    const { jwt = null } = req.cookies;

    if (jwt) {
        const bearer = decodeURIComponent(jwt).split('Bearer: ');
        const jwtToken = bearer[1] ? bearer[1] : null;

        let decodedToken;
        try {
            decodedToken = verify(jwtToken, process.env.JWT_PRIVATE_KEY);

            res.cookie('jwt', jwt, { maxAge: 900000, httpOnly: true });
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
