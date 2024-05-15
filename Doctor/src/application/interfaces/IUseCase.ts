import {
  ICreateUserUseCase,
  IFindUserByEmailUseCase,
  IFindUserByIdUseCase,
  IVerifyUserUseCase,
  IUpdateProfileUseCase,
  IListDoctorUseCase,
  IBlockUserUseCase,
} from "../../domain/useCaseInterface";

export interface IUseCases {
  createUserUseCase: (dependencies: any) => ICreateUserUseCase;
  findUserByEmailUseCase: (dependencies: any) => IFindUserByEmailUseCase;
  findUserByIdUseCase: (dependencies: any) => IFindUserByIdUseCase;
  verifyUserUseCase: (dependencies: any) => IVerifyUserUseCase;
  updateProfileUseCase: (dependencies: any) => IUpdateProfileUseCase;
  listDoctorsUseCase: (dependencies: any) => IListDoctorUseCase;
  blockUserUseCase: (dependencies: any) => IBlockUserUseCase;
}
