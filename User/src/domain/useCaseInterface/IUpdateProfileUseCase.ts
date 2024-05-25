import { UserEntity } from "../entities";

export interface IUpdateUserProfileUseCase {
    execute(data: UserEntity): Promise<UserEntity | null>;
}