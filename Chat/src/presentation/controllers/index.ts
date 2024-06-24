import { sendMessageController } from "./sendMessage";
import { getChatByIdController } from "./getChatById";
import { getUsersController } from "./getUsers";
import { getDoctorsController } from "./getDoctors";
import { getPrescriptionsController } from "./getPrescriptions";
import { deleteMessageController } from "./deleteMessage";

export const controllers = (dependencies: any) => {
  return {
    sendMessage: sendMessageController(dependencies),
    getChatById: getChatByIdController(dependencies),
    getUsers: getUsersController(dependencies),
    getDoctors: getDoctorsController(dependencies),
    getPrescription: getPrescriptionsController(dependencies),
    deleteMessage: deleteMessageController(dependencies),
  };
};
