import { AppointmentEntity } from "@/domain/entities";

export interface IRepositories {
   createAppointment: (data: AppointmentEntity) => Promise<AppointmentEntity | null>;
   listDoctorSlots: (doctorId: string, selectedDate: string) => Promise<AppointmentEntity[] | null>;
   slotListing: (doctorId: string) => Promise<AppointmentEntity[] | null>;
}