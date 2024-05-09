import { UserEntity } from "../entities";

export interface IVerifyUserUseCase {
  execute(data: { email: string; otp: string }): Promise<UserEntity | null>;
}
