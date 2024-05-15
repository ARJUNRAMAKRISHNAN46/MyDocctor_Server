import { Router } from "express";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { controllers } from "../../presentation/controllers";

export const routes = (dependencies: IDependencies) => {
  const {
    verifyDoctor,
    updateProfile,
    listDoctors,
    findDoctorById,
    blockUser,
    updateBooking,
  } = controllers(dependencies);

  const router = Router();

  router.route("/verify-doctor").get(verifyDoctor);

  router.route("/update-profile").post(updateProfile);

  router.route("/list-doctor").get(listDoctors);

  router.route("/find-doctor/:id").get(findDoctorById);

  router.route("/block-user/:id").get(blockUser);

  router.route("/update-booking/:id").post(updateBooking);

  return router;
};
