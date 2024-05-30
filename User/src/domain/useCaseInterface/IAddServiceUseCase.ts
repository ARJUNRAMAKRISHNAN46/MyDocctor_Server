import { ServiceEntity } from "../entities/service";

export interface IAddServiceUseCase {
  execute(data: ServiceEntity): Promise<ServiceEntity | null>;
}
