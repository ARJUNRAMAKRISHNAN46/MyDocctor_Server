import { IUserEntity } from "../entities";

export interface IGetUsersUseCase {
  execute(userId: string): Promise<IUserEntity[] | null>;
}
