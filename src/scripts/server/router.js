import { Router } from 'express';
import { SignInServiceImpl } from '../universal/pages/sign-in';
import { SignUpServiceImpl } from '../universal/pages/sign-up';
import { HomeServiceImpl } from '../universal/pages/home';

export const router = () => {
    const router = Router();

    router.post('/sign-in', SignInServiceImpl.signIn);
    router.post('/sign-up', SignUpServiceImpl.signUp);

    return router;
};
