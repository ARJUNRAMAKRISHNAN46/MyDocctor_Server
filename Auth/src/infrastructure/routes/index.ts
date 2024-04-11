import { Router } from 'express';
import { IDependencies } from '@/application/interfaces/IDependencies';
import { controllers } from '../../presentation/controllers';

export const routes = (dependencies: IDependencies) => {
    const {
        doctorLogin,
        patientLogin,
    } = controllers(dependencies);

    const router = Router();

    router.route('/login').get(patientLogin);

    router.route('/doctor/login').get(doctorLogin);

    return router;
}