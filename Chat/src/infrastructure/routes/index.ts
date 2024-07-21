import { Router } from "express";
import { controllers } from "../../presentation/controllers";
import { getLastMessageController } from "../../presentation/controllers/getLastMessage";

export const routes = (dependencies: any) => {
  const {
    getChatById,
    sendMessage,
    getDoctors,
    getUsers,
    getPrescription,
    deleteMessage,
  } = controllers(dependencies);

  const router = Router();

  router.route("/send-message/:id").post(sendMessage);

  router.route("/get-chatBy-id/:id").post(getChatById);

  router.route("/get-doctors/:id").get(getDoctors);

  router.route("/get-users/:id").get(getUsers);

  router.route("/get-prescriptions/:id").get(getPrescription);

  router.route("/delete-message/:id").get(deleteMessage);

  router.route("/get-last-message/:id").post(getLastMessageController);

  return router;
};
