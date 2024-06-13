import { IDependencies } from "@/application/interfaces/IDependencies";
// import { addChatController } from "./addChat";
// import { getChatController } from "./getChat";
import { sendMessageController } from "./sendMessage";
import { getChatByIdController } from "./getChatById";
import { getUsersController } from "./getUsers";
import { getDoctorsController } from "./getDoctors";

export const controllers = (dependencies: IDependencies) => {
  return {
    // addChat: addChatController(dependencies),
    // getChat: getChatController(dependencies),
    sendMessage: sendMessageController(dependencies),
    getChatById: getChatByIdController(dependencies),
    getUsers: getUsersController(dependencies),
    getDoctors: getDoctorsController(dependencies),
  };
};
