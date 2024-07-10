// import {
//   IAddServiceUseCase,
//   IAddSpecialityUseCase,
//   IFindUserByEmailUseCase,
//   IFindUserByIdUseCase,
//   IListServiceUseCase,
//   IListSpecialityUseCase,
//   IListUserUseCase,
//   IUpdateUserProfileUseCase,
//   IVerifyUserUseCase,
// } from "@/domain/useCaseInterface";
import { IRepositories } from "./IRepositories";
import { IUseCases } from "../../application/interfaces/IUseCase";

export interface IDependencies {
  repositories: IRepositories;
  useCases: IUseCases;
  //  {
  //   findUserByEmailUseCase: (dependencies: any) => IFindUserByEmailUseCase;
  //   findUserByIdUseCase: (dependencies: any) => IFindUserByIdUseCase;
  //   verifyUserUseCase: (dependencies: any) => IVerifyUserUseCase;
  //   listUserUseCase: (dependencies: any) => IListUserUseCase;
  //   addSpecialityUseCase: (dependencies: any) => IAddSpecialityUseCase;
  //   listSpecialityUseCase: (dependencies: any) => IListSpecialityUseCase;
  //   updateProfileUseCase: (dependencies: any) => IUpdateUserProfileUseCase;
  //   addServiceUseCase: (dependencies: any) => IAddServiceUseCase;
  //   listServiceUseCase: (dependencies: any) => IListServiceUseCase;
  // };
}
