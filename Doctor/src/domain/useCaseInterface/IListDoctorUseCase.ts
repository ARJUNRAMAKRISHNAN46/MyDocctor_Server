import { UserEntity } from "../entities";

export interface IListDoctorUseCase {
  execute(): Promise<UserEntity[] | null>;
}
