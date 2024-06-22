import { IMessageEntity } from "../entities";

export interface IGetPrescriptionsUseCase {
  execute(recieverId: string): Promise<IMessageEntity[] | null>;
}
