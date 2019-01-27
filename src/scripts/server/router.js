import { Router } from 'express';
import { SignInServiceImpl } from '../universal/pages/sign-in/services/sign-in.service.impl';
import { SignUpServiceImpl } from '../universal/pages/sign-up/services/sign-up.service.impl';
import { UserServiceImpl } from '../universal/pages/user/services/user.service.impl';
import { PetServiceImpl } from '../universal/pages/pet/services/pet.service.impl';

export const router = () => {
    const router = Router();

    router.post('/sign-in', SignInServiceImpl.signIn);
    router.post('/sign-up', SignUpServiceImpl.signUp);
    router.get('/user-page/:userId', UserServiceImpl.loadUserPage);
    router.get('/pet-page/:petId', PetServiceImpl.loadPetPage);

    return router;
};
