import { Router } from "express";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { controllers } from "../../presentation/controllers";

export const routes = (dependencies: IDependencies) => {
  const { createCheckoutSession } = controllers(dependencies);

  const router = Router();

  router.route("/create-checkout-session").post(createCheckoutSession);

  return router;
};
