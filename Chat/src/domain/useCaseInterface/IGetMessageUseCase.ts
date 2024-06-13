import { getMessageInputs } from "@/infrastructure/database/mongoDB/repositories";
import { IMessageEntity } from "../entities";

export interface IGetMessagesUseCase {
  execute(data: getMessageInputs): Promise<IMessageEntity[] | null>;
}
