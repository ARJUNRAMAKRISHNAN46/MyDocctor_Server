import { AppointmentEntity } from "../entities";

export interface IListDoctorUseCase {
    execute(doctor_id: string): Promise<AppointmentEntity[] | null>;
}