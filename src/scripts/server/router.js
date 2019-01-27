import { Router } from 'express';
import { requireAuthMiddleware } from './middlewares/require-auth.middleware';
import { SignInServiceImpl } from '../universal/pages/sign-in/services/sign-in.service.impl';
import { SignUpServiceImpl } from '../universal/pages/sign-up/services/sign-up.service.impl';
import { UserServiceImpl } from '../universal/pages/user/services/user.service.impl';
import { PetServiceImpl } from '../universal/pages/pet/services/pet.service.impl';
import { PetAddServiceImpl } from '../universal/pages/pet-add/services/pet-add.service.impl';

export const router = () => {
    const router = Router();

    router.post('/sign-in', SignInServiceImpl.signIn);
    router.post('/sign-up', SignUpServiceImpl.signUp);
    router.get('/user-page/:userId', UserServiceImpl.loadUserPage);
    router.get('/pet-page/:petId', PetServiceImpl.loadPetPage);
    router.get('/pet-add-page/pet-types/:petTypeId/breeds', requireAuthMiddleware, PetAddServiceImpl.getPetBreeds);
    router.get('/pet-add-page/pet-types', requireAuthMiddleware, PetAddServiceImpl.getPetTypes);

    return router;
};
