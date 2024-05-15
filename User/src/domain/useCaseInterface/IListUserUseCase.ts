import { UserEntity } from "../entities";

export interface IListUserUseCase {
    execute(): Promise<UserEntity[] | null>;
}