import { IMessageEntity } from "../entities";

export interface IDeleteMessage {
  execute(msgId: string): Promise<IMessageEntity | null>;
}
