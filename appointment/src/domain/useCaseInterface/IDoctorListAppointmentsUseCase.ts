import { AppointmentEntity } from "../entities";

export interface IDoctorListAppointmentsUseCase {
  execute(doctorId: string): Promise<AppointmentEntity[] | null>;
}
