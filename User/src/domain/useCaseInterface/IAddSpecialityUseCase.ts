import { SpecialityEntity } from "../entities";

export interface IAddSpecialityUseCase {
  execute(data: SpecialityEntity): Promise<SpecialityEntity | null>;
}
