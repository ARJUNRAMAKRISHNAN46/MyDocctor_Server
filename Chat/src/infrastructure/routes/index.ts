import { Router } from "express";
import { controllers } from "../../presentation/controllers";

export const routes = (dependencies: any) => {
  const { getChatById, sendMessage, getDoctors, getUsers } =
    controllers(dependencies);

  const router = Router();

  // router.route("/add-chat").post(addChat);

  // router.route("/get-chat").post(getChat);

  router.route("/send-message/:id").post(sendMessage);

  router.route("/get-chatBy-id/:id").post(getChatById);

  router.route("/get-doctors/:id").get(getDoctors);

  router.route("/get-users/:id").get(getUsers);

  return router;
};
