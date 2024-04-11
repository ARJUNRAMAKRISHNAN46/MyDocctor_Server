import { DoctorEntity } from "../entities";

export interface IFindDoctorByEmailUseCase {
  execute(email: string): Promise<DoctorEntity | null>;
}
