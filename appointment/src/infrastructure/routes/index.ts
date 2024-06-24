import { Router } from "express";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { controllers } from "../../presentation/controllers";

export const routes = (dependencies: IDependencies) => {
  const {
    createAppoinment,
    listDoctorSlots,
    slotListing,
    updateAppoinment,
    listUsersForSideBar,
    listDoctorsForSideBar,
    userAppointment,
    listAllAppointments,
    findSlotById,
  } = controllers(dependencies);

  const router = Router();

  router.route("/create-appointment").post(createAppoinment);

  router.route("/list-doctor-slots/:id").get(listDoctorSlots);

  router.route("/list-slots/:id").get(slotListing);

  router.route("/update-appoinment").post(updateAppoinment);

  router.route("/list-users/:id").get(listUsersForSideBar);

  router.route("/list-doctors/:id").get(listDoctorsForSideBar);

  router.route("/list-user-appointments/:id").get(userAppointment);

  router.route("/list-all-appointments").get(listAllAppointments);

  router.route("/get-slot/:id").get(findSlotById);

  return router;
};
