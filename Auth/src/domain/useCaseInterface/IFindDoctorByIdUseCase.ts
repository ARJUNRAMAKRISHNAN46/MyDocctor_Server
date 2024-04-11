import { DoctorEntity } from "../entities";

export interface IFindDoctorByIdUseCase {
  execute(id: string): Promise<DoctorEntity | null>;
}
