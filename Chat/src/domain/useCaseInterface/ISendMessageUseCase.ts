import { IMessageEntity } from "../entities";

export interface ISendMessageUseCase {
  execute({ content, chatId, userId }: any): Promise<IMessageEntity | null>;
}
