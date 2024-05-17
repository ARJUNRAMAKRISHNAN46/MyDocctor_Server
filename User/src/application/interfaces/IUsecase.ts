import {
  ICreateUserUseCase,
  IFindUserByEmailUseCase,
  IFindUserByIdUseCase,
  IUpdateUserPasswordUseCase,
  IVerifyUserUseCase,
  ILoginUserUseCase,
  IVerifyOtpUseCase,
  IUserSignupUseCase,
  IIsExistUseCase,
  IListUserUseCase,
  IAddSpecialityUseCase,
  IListSpecialityUseCase,
} from "../../domain/useCaseInterface";

export interface IUseCases {
  createUserUseCase: (dependencies: any) => ICreateUserUseCase;
  findUserByEmailUseCase: (dependencies: any) => IFindUserByEmailUseCase;
  findUserByIdUseCase: (dependencies: any) => IFindUserByIdUseCase;
  updateUserPasswordUseCase: (dependencies: any) => IUpdateUserPasswordUseCase;
  verifyUserUseCase: (dependencies: any) => IVerifyUserUseCase;
  loginUserUseCase: (dependencies: any) => ILoginUserUseCase;
  verifyOtpUseCase: (dependencies: any) => IVerifyOtpUseCase;
  userSignupUseCase: (dependencies: any) => IUserSignupUseCase;
  isExistUseCase: (dependencies: any) => IIsExistUseCase;
  listUserUseCase: (dependencies: any) => IListUserUseCase;
  addSpecialityUseCase: (dependencies: any) => IAddSpecialityUseCase;
  listSpecialityUseCase: (dependencies: any) => IListSpecialityUseCase
}
