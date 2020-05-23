import {verify} from 'jsonwebtoken';
import {UserServiceImpl} from '../../universal/pages/user/services/user.service.impl';

export const requireAuthMiddleware = async (req, res, next) => {
  const {jwt = ''} = req.cookies;

  const bearer = decodeURIComponent(jwt).split(' ');
  const jwtToken = bearer[1];

  let decodedToken;
  try {
    decodedToken = verify(jwtToken, process.env.JWT_PRIVATE_KEY);
  } catch (error) {
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
    } catch (error) {
    }
  }

  if (!req.auth) {
    res
      .status(401)
      .send({
        error: 'You are not authorized for this action.',
      });
  } else {
    next();
  }
};
