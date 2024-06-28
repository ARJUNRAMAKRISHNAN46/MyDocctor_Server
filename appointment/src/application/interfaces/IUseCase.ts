import {
  ICreateAppointmentUseCase,
  IListDoctorUseCase,
  ISlotListingUseCase,
  IUpdateAppointmentUseCase,
  IDoctorListAppointmentsUseCase,
  IListUsersForSideBarUseCase,
  IListDoctorsForSideBarUseCase,
  IUserAppointmentUseCase,
  IListAllAppointmentUseCase,
  IFindSlotByIdUseCase,
  IRemoveUserIdFromSlotUseCase,
  IRemoveSlotByDoctorUseCase,
} from "@/domain/useCaseInterface";

export interface IUseCases {
  createAppointmentUseCase: (dependencies: any) => ICreateAppointmentUseCase;
  listDoctorSlotsUseCase: (dependencies: any) => IListDoctorUseCase;
  slotListingUseCase: (dependencies: any) => ISlotListingUseCase;
  updateAppointmentUseCase: (dependencies: any) => IUpdateAppointmentUseCase;
  doctorListAppointmentsUseCase: (dependencies : any) => IDoctorListAppointmentsUseCase;
  listUsersForSideBarUseCase: (dependencies: any) => IListUsersForSideBarUseCase;
  listDoctorsForSideBarUseCase: (dependencies: any) => IListDoctorsForSideBarUseCase;
  userAppointmentUseCase: (dependencies: any) => IUserAppointmentUseCase;
  listAllAppointmentUseCase: (dependencies: any) => IListAllAppointmentUseCase;
  findSlotByIdUseCase: (dependencies: any) => IFindSlotByIdUseCase;
  removeUserIdFromSlotUseCase: (dependencies: any) => IRemoveUserIdFromSlotUseCase;
  removeSlotByDoctorUseCase: (dependencies: any) => IRemoveSlotByDoctorUseCase;
}
