import { PatientEntity } from "../entities";

export interface IFindPatientByEmailUseCase {
  execute(email: string): Promise<PatientEntity | null>;
}
