import { IDependencies } from "@/application/interfaces/IDependencies";
import { controllers } from "../../presentation/controllers";
import { Router } from "express";

export const routes = (dependecies: IDependencies) => {
  const { addSpeciality, verifyDoctor } = controllers(dependecies);

  const router = Router();

  router.route("/addSpeciality").post(addSpeciality);

  router.route("/verifyDoctor").get(verifyDoctor);

  return router;
};
