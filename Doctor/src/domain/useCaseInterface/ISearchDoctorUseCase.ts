import { UserEntity } from "../entities";

export interface ISearchDoctorUseCase {
  execute(query: string): Promise<UserEntity[] | null>;
}
