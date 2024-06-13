import { IUserEntity, IMessageEntity } from "@/domain/entities";

export interface IRepositories {
    getMessage: (id: string) => Promise<IMessageEntity[] | null>;
    sendMessage: ({content, chatId, userId}: any) => Promise<IMessageEntity | null>;
    getUsers: (userId: string) => Promise<IUserEntity[] | null>;
    getDoctors: (userId: string) => Promise<IUserEntity[] | null>;
    // addChat: (obj: any) => Promise<IConversationEntity | null>;
    // getChat: (obj: any) => Promise<IConversationEntity[] | null>;
}
