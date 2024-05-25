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
  } = controllers(dependencies);

  const router = Router();

  router.route("/verify-doctor").get(verifyDoctor);

  router.route("/list-users").get(listUser);

  router.route("/addSpeciality").post(addSpeciality);

  router.route("/list-speciality").get(listSpeciality);

  router.route("/update-profile").post(updateProfile)

  return router;
};
