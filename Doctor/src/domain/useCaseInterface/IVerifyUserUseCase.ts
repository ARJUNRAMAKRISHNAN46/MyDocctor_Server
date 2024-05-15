import { UserEntity } from "../entities";

export interface IVerifyUserUseCase {
  execute( email: string ): Promise<UserEntity | null>;
}
