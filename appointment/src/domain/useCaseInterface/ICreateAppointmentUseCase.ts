import { AppointmentEntity } from "../entities";

export interface ICreateAppointmentUseCase {
  execute(data: AppointmentEntity): Promise<AppointmentEntity | string | null>;
}
