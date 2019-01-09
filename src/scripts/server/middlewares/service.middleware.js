import { Router } from 'express';
import { SignInServiceImpl } from '../../universal/pages/sign-in';
import { SignUpServiceImpl } from '../../universal/pages/sign-up';

export const serviceMiddleware = () => {
    const router = Router();

    router.post('/sign-in', new SignInServiceImpl().signIn);
    router.post('/sign-up', new SignUpServiceImpl().signUp);

    return router;
};
