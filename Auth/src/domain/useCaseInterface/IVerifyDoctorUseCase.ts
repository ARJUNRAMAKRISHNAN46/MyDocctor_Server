import { DoctorEntity } from "../entities";

export interface IVerifyDoctorUseCase {
  execute(data: { email: string; otp: string }): Promise<DoctorEntity | null>;
}
