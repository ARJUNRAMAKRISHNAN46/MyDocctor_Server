import { Router } from "express";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { controllers } from "../../presentation/controllers";
// import { JWTMiddleware } from "../../utils/middleware/JWTMiddleware";

export const routes = (dependencies: IDependencies) => {
  const { createCheckoutSession, savePayment, listPayments } =
    controllers(dependencies);

  const router = Router();

  router.route("/create-checkout-session").post(createCheckoutSession);

  router.route("/save-payment").post(savePayment);

  router.route("/list-payments/:id").get(listPayments);

  return router;
};
