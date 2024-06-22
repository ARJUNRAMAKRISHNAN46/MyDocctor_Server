import { IMessageEntity } from "../entities";

export interface ISendMessageUseCase {
  execute({ content, chatId, userId, type }: any): Promise<IMessageEntity | null>;
}
