import { UserEntity } from "../entities";

export interface IVerifyDoctorUseCase {
  execute(id: string): Promise<UserEntity | null>;
}
