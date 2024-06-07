import {
  ICreateAppointmentUseCase,
  IListDoctorUseCase,
  ISlotListingUseCase,
  IUpdateAppointmentUseCase,
  IDoctorListAppointmentsUseCase,
  IListUsersForSideBarUseCase,
  IListDoctorsForSideBarUseCase,
  IUserAppointmentUseCase
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
}
