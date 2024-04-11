import { PatientEntity } from "../entities";

export interface IUpdatePatientPasswordUseCase {
  execute(data: {
    email: string;
    password: string;
  }): Promise<PatientEntity | null>;
}
