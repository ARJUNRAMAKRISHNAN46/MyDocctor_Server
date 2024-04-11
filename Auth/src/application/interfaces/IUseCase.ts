import {
  ICreatePatientUseCase,
  ICreateDoctorUseCase,
  IFindPatientByEmailUseCase,
  IFindDoctorByEmailUseCase,
  IFindPatientByIdUseCase,
  IFindDoctorByIdUseCase,
  IUpdatePatientPasswordUseCase,
  IUpdateDoctorPasswordUseCase,
  IVerifyPatientUseCase,
  IVerifyDoctorUseCase,
  ILoginPatientUseCase,
  ILoginDoctorUseCase
} from "../../domain/useCaseInterface";

export interface IUseCases {
    createPatientUseCase: (dependencies: any) => ICreatePatientUseCase;
    createDoctorUseCase: (dependencies: any) => ICreateDoctorUseCase;
    findPatientByEmailUseCase: (dependencies: any) => IFindPatientByEmailUseCase;
    findDoctorByEmailUseCase: (dependencies: any) => IFindDoctorByEmailUseCase;
    findPatientByIdUseCase: (dependencies: any) => IFindPatientByIdUseCase;
    findDoctorByIdUseCase: (dependencies: any) => IFindDoctorByIdUseCase;
    updatePatientPasswordUseCase: (dependencies: any) => IUpdatePatientPasswordUseCase;
    updateDoctorPasswordUseCase: (dependencies: any) => IUpdateDoctorPasswordUseCase;
    verifyPatientUseCase: (dependencies: any) => IVerifyPatientUseCase;
    verifyDoctorUseCase: (dependencies: any) => IVerifyDoctorUseCase;
    loginPatientUseCase: (dependencies: any) => ILoginPatientUseCase;
    loginDoctorUseCase: (dependencies: any) => ILoginDoctorUseCase;
}