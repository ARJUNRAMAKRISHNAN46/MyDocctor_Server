import { AppointmentEntity } from "../entities";

export interface IUpdateAppointmentUseCase {
    execute(data: any): Promise<AppointmentEntity | null>;
}