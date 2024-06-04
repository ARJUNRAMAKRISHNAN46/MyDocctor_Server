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
    findDoctorBySpeciality,
    addAppointmentLink,
    filterDoctor,
    searchDoctor,
  } = controllers(dependencies);

  const router = Router();

  router.route("/verify-doctor").get(verifyDoctor);

  router.route("/update-profile").post(updateProfile);

  router.route("/list-doctor").get(listDoctors);

  router.route("/find-doctor/:id").get(findDoctorById);

  router.route("/block-user/:id").get(blockUser);

  router.route("/update-booking/:id").put(updateBooking);

  router.route("/find-doctor").get(findDoctorBySpeciality);

  router.route("/add-link/:id").post(addAppointmentLink);

  router.route("/filter-doctors").get(filterDoctor);

  router.route("/search-doctors").get(searchDoctor);

  return router;
};
