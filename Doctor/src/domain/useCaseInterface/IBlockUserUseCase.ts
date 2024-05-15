import { UserEntity } from "../entities";

export interface IBlockUserUseCase {
  execute(id: string): Promise<UserEntity | null>;
}
