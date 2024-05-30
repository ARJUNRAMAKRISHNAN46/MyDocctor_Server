import {
  ICreateAppointmentUseCase,
  IListDoctorUseCase,
  ISlotListingUseCase,
} from "@/domain/useCaseInterface";

export interface IUseCases {
  createAppointmentUseCase: (dependencies: any) => ICreateAppointmentUseCase;
  listDoctorSlotsUseCase: (dependencies: any) => IListDoctorUseCase;
  slotListingUseCase: (dependencies: any) => ISlotListingUseCase;
}
