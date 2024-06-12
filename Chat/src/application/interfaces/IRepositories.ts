import { IConversationEntity, IMessageEntity } from "@/domain/entities";

export interface IRepositories {
    addChat: (obj: any) => Promise<IConversationEntity | null>;
    getChat: (obj: any) => Promise<IConversationEntity[] | null>;
    getMessage: (id: string) => Promise<IMessageEntity[] | null>;
    sendMessage: ({content, chatId, userId}: any) => Promise<IMessageEntity | null>;
}
