import { UserEntity } from "../entities";

export interface IListDoctorsForSideBarUseCase {
  execute(userId: string): Promise<UserEntity[] | null>;
}
