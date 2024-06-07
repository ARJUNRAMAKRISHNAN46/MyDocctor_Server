import { AppointmentEntity } from "../entities";

export interface IUserAppointmentUseCase {
  execute(userId: string): Promise<AppointmentEntity[] | null>;
}
