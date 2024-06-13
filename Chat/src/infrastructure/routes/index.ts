import { Router } from "express";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { controllers } from "../../presentation/controllers";

export const routes = (dependencies: IDependencies) => {
  const { getChatById, sendMessage, getDoctors, getUsers } =
    controllers(dependencies);

  const router = Router();

  // router.route("/add-chat").post(addChat);

  // router.route("/get-chat").post(getChat);

  router.route("/send-message").post(sendMessage);

  router.route("/get-chatBy-id").get(getChatById);

  router.route("/get-doctors/:id").get(getDoctors);

  router.route("/get-users/:id").get(getUsers);

  return router;
};
