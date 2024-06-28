import { AppointmentEntity, UserEntity } from "@/domain/entities";
import { AdminAppointmentSlot, UserAppointmentSlot } from "@/infrastructure/database/mongoDB/repositories";

export interface IRepositories {
   createAppointment: (data: AppointmentEntity) => Promise<AppointmentEntity | null>;
   listDoctorSlots: (doctorId: string, selectedDate: string) => Promise<AppointmentEntity[] | null>;
   slotListing: (doctorId: string) => Promise<AppointmentEntity[] | null>;
   updateAppoinment: (data: any) => Promise<AppointmentEntity | null>;
   doctorListAppointments: (doctorId: string) => Promise<AppointmentEntity[] | null>;
   listUsersForSideBar: (doctorId: string) => Promise<UserEntity[] | null>;
   listDoctorsForSideBar: (userId: string) => Promise<UserEntity[] | null>;
   userAppointment: (userId: string) => Promise<UserAppointmentSlot[] | null>;
   listAllAppointments: () => Promise<AdminAppointmentSlot[] | null>;
   findSlotById: (slotId: string) => Promise<AppointmentEntity | null>;
   removeUserIdFromSlot: (slotId: string) => Promise<AppointmentEntity | null>;
}