import { IMessageEntity } from "../entities";

export interface ISendMessageUseCase {
  execute({ content, chatId, userId, type, replyTo }: any): Promise<IMessageEntity | null>;
}
