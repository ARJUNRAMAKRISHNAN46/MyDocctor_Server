import { DoctorEntity } from "../entities";

export interface IUpdateDoctorPasswordUseCase {
  execute(data: {
    email: string;
    password: string;
  }): Promise<DoctorEntity | null>;
}
