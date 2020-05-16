import {Router} from 'express';
import {requireAuthMiddleware} from './middlewares/require-auth.middleware';
import {SignInServiceImpl} from '../universal/pages/sign-in/services/sign-in.service.impl';
import {SignUpServiceImpl} from '../universal/pages/sign-up/services/sign-up.service.impl';
import {UserServiceImpl} from '../universal/pages/user/services/user.service.impl';
import {UserEditServiceImpl} from '../universal/pages/user-edit/services/user-edit.service.impl';
import {PetServiceImpl} from '../universal/pages/pet/services/pet.service.impl';
import {PetEditServiceImpl} from '../universal/pages/pet-edit/services/pet-edit.service.impl';
import {PetAddServiceImpl} from '../universal/pages/pet-add/services/pet-add.service.impl';
import {SearchServiceImpl} from '../universal/pages/search/services/search.service.impl';

export const router = () => {
  const router = Router();

  router.post('/sign-in', SignInServiceImpl.signIn);
  router.post('/sign-up', SignUpServiceImpl.signUp);
  router.get('/user-page/:userId', UserServiceImpl.load);
  router.put('/user-edit-page/:userId', requireAuthMiddleware, UserEditServiceImpl.userEditPageSave);
  router.get('/pet-page/:petId', PetServiceImpl.load);
  router.use('/pet-edit-page', PetEditServiceImpl.getRoutes());
  router.get('/pet-add-page/pet-types/:petTypeId/breeds', requireAuthMiddleware, PetAddServiceImpl.getPetBreeds);
  router.use('/pet-add-page', PetAddServiceImpl.getRoutes());
  router.use('/search-page', SearchServiceImpl.getRoutes());

  router.get('/sign-out', (req, res) => {
    res.clearCookie('jwt');

    res.send({
      success: true,
    });
  });

  router.get('/health', (res, req) => {
    req
      .status(200)
      .send({
        date: new Date(),
      });
  });

  return router;
};
