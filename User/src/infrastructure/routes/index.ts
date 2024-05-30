import { Router } from "express";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { controllers } from "../../presentation/controllers";

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

  router.route("/list-users").get(listUser);

  router.route("/add-speciality").post(addSpeciality);

  router.route("/list-speciality").get(listSpeciality);

  router.route("/update-profile").post(updateProfile);

  router.route("/list-services").get(listService);

  router.route("/add-service").post(addService);

  return router;
};
