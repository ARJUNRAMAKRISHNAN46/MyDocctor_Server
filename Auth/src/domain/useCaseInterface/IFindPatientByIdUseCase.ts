import { PatientEntity } from "../entities";

export interface IFindPatientByIdUseCase {
  execute(id: string): Promise<PatientEntity | null>;
}
