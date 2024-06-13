import { IUserEntity } from "../entities";

export interface IGetDoctorsUseCase {
  execute(userId: string): Promise<IUserEntity[] | null>;
}
