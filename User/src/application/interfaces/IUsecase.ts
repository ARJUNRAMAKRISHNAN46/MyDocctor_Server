import { IVerifyDoctorUseCase } from '../../domain/useCaseInterface';

export interface IUseCases {
    verifyDoctor: (dependencies: any) => IVerifyDoctorUseCase;
}