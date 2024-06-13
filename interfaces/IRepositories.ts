import { IUserEntity, IMessageEntity } from "@/domain/entities";
import { getMessageInputs } from "@/infrastructure/database/mongoDB/repositories";

export interface IRepositories {
    getMessage: (data: getMessageInputs) => Promise<IMessageEntity[] | null>;
    sendMessage: ({content, chatId, userId}: any) => Promise<IMessageEntity | null>;
    getUsers: (userId: string) => Promise<IUserEntity[] | null>;
    getDoctors: (userId: string) => Promise<IUserEntity[] | null>;
    // addChat: (obj: any) => Promise<IConversationEntity | null>;
    // getChat: (obj: any) => Promise<IConversationEntity[] | null>;
}
