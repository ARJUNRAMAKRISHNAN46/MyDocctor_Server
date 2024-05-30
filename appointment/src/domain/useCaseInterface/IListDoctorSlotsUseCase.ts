import { AppointmentEntity } from "../entities";

export interface IListDoctorUseCase {
  execute(
    doctor_id: string,
    selectedDate: string
  ): Promise<AppointmentEntity[] | null>;
}
