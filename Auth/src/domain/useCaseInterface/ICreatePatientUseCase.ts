import { PatientEntity } from "../entities";

export interface ICreatePatientUseCase {
    execute(data: PatientEntity): Promise<PatientEntity | null>;
}