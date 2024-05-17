import { SpecialityEntity } from "../entities";

export interface IListSpecialityUseCase {
  execute(): Promise<SpecialityEntity[] | null>;
}
