import { ServiceEntity } from "../entities/service";

export interface IListServiceUseCase {
  execute(): Promise<ServiceEntity[] | null>;
}
