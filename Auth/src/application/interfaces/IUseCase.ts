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
}
