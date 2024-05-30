import {
  IFindUserByEmailUseCase,
  IFindUserByIdUseCase,
  IVerifyUserUseCase,
  IListUserUseCase,
  IAddSpecialityUseCase,
  IListSpecialityUseCase,
  IUpdateUserProfileUseCase,
  IAddServiceUseCase,
  IListServiceUseCase,
} from "../../domain/useCaseInterface";

export interface IUseCases {
  findUserByEmailUseCase: (dependencies: any) => IFindUserByEmailUseCase;
  findUserByIdUseCase: (dependencies: any) => IFindUserByIdUseCase;
  verifyUserUseCase: (dependencies: any) => IVerifyUserUseCase;
  listUserUseCase: (dependencies: any) => IListUserUseCase;
  addSpecialityUseCase: (dependencies: any) => IAddSpecialityUseCase;
  listSpecialityUseCase: (dependencies: any) => IListSpecialityUseCase;
  updateProfileUseCase: (dependencies: any) => IUpdateUserProfileUseCase;
  addServiceUseCase: (dependencies: any) => IAddServiceUseCase;
  listServiceUseCase: (dependencies: any) => IListServiceUseCase;
}
