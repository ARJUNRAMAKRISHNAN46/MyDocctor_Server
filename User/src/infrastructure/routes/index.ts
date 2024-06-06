import { Router } from "express";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { controllers } from "../../presentation/controllers";
import { JWTMiddleware } from "../..//utils/middleware/JWTMiddleware";

export const routes = (dependencies: IDependencies) => {
  const {
    verifyDoctor,
    listUser,
    addSpeciality,
    listSpeciality,
    updateProfile,
    listService,
    addService,
  } = controllers(dependencies);

  const router = Router();

  router.route("/verify-doctor").get(verifyDoctor);

  router.route("/list-users").get(JWTMiddleware, listUser);

  router.route("/add-speciality").post(addSpeciality);

  router.route("/list-speciality").get(JWTMiddleware, listSpeciality);

  router.route("/update-profile").post(updateProfile);

  router.route("/list-services").get(JWTMiddleware, listService);

  router.route("/add-service").post(addService);

  return router;
};
