import { UserEntity } from "../entities";

export interface IUserSignupUseCase {
    execute(user: UserEntity): Promise<UserEntity | null>;
}