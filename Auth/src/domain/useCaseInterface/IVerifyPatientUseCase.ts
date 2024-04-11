import { PatientEntity } from "../entities";

export interface IVerifyPatientUseCase {
  execute(data: { email: string; otp: string }): Promise<PatientEntity | null>;
}
