import { IAddSpecialityUseCase, IVerifyDoctorUseCase } from '../../domain/useCaseInterface';

export interface IUseCases {
    verifyDoctorUseCase: (dependencies: any) => IVerifyDoctorUseCase;
    addSpecialityUseCase: (dependencies: any) => IAddSpecialityUseCase;
}