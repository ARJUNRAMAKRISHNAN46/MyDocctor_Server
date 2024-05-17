import {
  ICreateUserUseCase,
  IFindUserByEmailUseCase,
  IFindUserByIdUseCase,
  IVerifyUserUseCase,
  IUpdateProfileUseCase,
  IListDoctorUseCase,
  IBlockUserUseCase,
  IUpdateBookingUseCase,
  IFindDoctorBySpecialityUseCase,
} from "../../domain/useCaseInterface";

export interface IUseCases {
  createUserUseCase: (dependencies: any) => ICreateUserUseCase;
  findUserByEmailUseCase: (dependencies: any) => IFindUserByEmailUseCase;
  findUserByIdUseCase: (dependencies: any) => IFindUserByIdUseCase;
  verifyUserUseCase: (dependencies: any) => IVerifyUserUseCase;
  updateProfileUseCase: (dependencies: any) => IUpdateProfileUseCase;
  listDoctorsUseCase: (dependencies: any) => IListDoctorUseCase;
  blockUserUseCase: (dependencies: any) => IBlockUserUseCase;
  updateBookingUseCase: (dependencies: any) => IUpdateBookingUseCase;
  findDoctorBySpecialityUseCase: (dependencies: any) => IFindDoctorBySpecialityUseCase;
}
