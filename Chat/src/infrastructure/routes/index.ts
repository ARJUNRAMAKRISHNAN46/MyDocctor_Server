import { Router } from "express";
import { controllers } from "../../presentation/controllers";

export const routes = (dependencies: any) => {
  const { getChatById, sendMessage, getDoctors, getUsers, getPrescription } =
    controllers(dependencies);

  const router = Router();

  router.route("/send-message/:id").post(sendMessage);

  router.route("/get-chatBy-id/:id").post(getChatById);

  router.route("/get-doctors/:id").get(getDoctors);

  router.route("/get-users/:id").get(getUsers);

  router.route("/get-prescriptions/:id").get(getPrescription);

  return router;
};
