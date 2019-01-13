import { Router } from 'express';
import { SignInServiceImpl } from '../universal/pages/sign-in';
import { SignUpServiceImpl } from '../universal/pages/sign-up';
import { UserServiceImpl } from '../universal/pages/user';

export const router = () => {
    const router = Router();

    router.post('/sign-in', SignInServiceImpl.signIn);
    router.post('/sign-up', SignUpServiceImpl.signUp);
    router.get('/user-page/:userId', UserServiceImpl.loadUserPage);

    return router;
};
