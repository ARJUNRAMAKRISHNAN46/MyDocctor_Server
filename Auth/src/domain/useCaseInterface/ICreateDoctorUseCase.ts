import { DoctorEntity } from "../entities";

export interface ICreateDoctorUseCase {
    execute(data: DoctorEntity): Promise<DoctorEntity | null>;
}