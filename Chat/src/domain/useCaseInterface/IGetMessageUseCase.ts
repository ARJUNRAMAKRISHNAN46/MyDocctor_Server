import { IMessageEntity } from "../entities";

export interface IGetMessagesUseCase {
  execute(id: string): Promise<IMessageEntity[] | null>;
}
