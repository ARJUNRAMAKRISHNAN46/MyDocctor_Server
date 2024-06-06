import { UserEntity } from "../entities";

export interface IListUsersForSideBarUseCase {
  execute(doctor_id: string): Promise<UserEntity[] | null>;
}
