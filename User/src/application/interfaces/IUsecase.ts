import { IVerifyDoctorUseCase } from '../../domain/useCaseInterface';

export interface IUseCases {
    verifyDoctorUseCase: (dependencies: any) => IVerifyDoctorUseCase;
}