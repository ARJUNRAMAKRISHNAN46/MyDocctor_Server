import { PatientEntity } from "../entities";

export interface ILoginPatientUseCase {
  execute(email: string, password: string): Promise<PatientEntity | null>;
}
