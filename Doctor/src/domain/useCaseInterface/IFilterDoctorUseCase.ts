import { UserEntity } from "../entities";
import { FilterParams } from "../entities/filterParams";

export interface IFilterDoctorUseCase {
    execute(params: FilterParams): Promise<UserEntity[] | null>;
}
