import { Router } from "express";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { controllers } from "../../presentation/controllers";
import { JWTMiddleware } from "../../utils/middleware/JWTMiddleware";

export const routes = (dependencies: IDependencies) => {
  const { createCheckoutSession, savePayment, listPayments } =
    controllers(dependencies);

  const router = Router();

  router
    .route("/create-checkout-session")
    .post(JWTMiddleware, createCheckoutSession);

  router.route("/save-payment").post(JWTMiddleware, savePayment);

  router.route("/list-payments/:id").get(JWTMiddleware, listPayments);

  return router;
};
