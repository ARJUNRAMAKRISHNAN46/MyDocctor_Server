import { UserEntity } from "../entities";

export interface IFindDoctorBySpecialityUseCase {
  execute(speciality: string): Promise<UserEntity[] | null>;
}
