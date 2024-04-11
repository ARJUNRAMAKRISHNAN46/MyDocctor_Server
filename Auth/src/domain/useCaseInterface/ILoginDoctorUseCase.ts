import { DoctorEntity } from "../entities";

export interface ILoginDoctorUseCase {
    execute(email: string, password: string): Promise<DoctorEntity | null>;
}