import { IDependencies } from "@/application/interfaces/IDependencies";
import { addChatController } from "./addChat";
import { getChatController } from "./getChat";
import { sendMessageController } from "./sendMessage";
import { getChatByIdController } from "./getChatById";

export const controllers = (dependencies: IDependencies) => {
  return {
    addChat: addChatController(dependencies),
    getChat: getChatController(dependencies),
    sendMessage: sendMessageController(dependencies),
    getChatById: getChatByIdController(dependencies),
  };
};
