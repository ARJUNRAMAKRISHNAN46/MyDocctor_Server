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
  IAddAppointmentLinkUseCase,
  IFilterDoctorUseCase,
  ISearchDoctorUseCase,
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
  addAppointmentLinkUseCase: (dependencies: any) => IAddAppointmentLinkUseCase;
  filterDoctorUseCase: (dependencies: any) => IFilterDoctorUseCase;
  searchDoctorUseCase: (dependencies: any) => ISearchDoctorUseCase;
}
