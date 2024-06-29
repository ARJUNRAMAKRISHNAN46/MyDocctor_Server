import { Router } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";
import { controllers } from "../../presentation/controllers";
import { reserveSlot } from "../../presentation/controllers/reserveSlot";

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
    removeUserIdFromSlot,
    removeSlotByDoctor,
    refundToWallet,
    walletHistory,
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

  router.route("/remove-userId/:id").get(removeUserIdFromSlot);

  router.route("/remove-slot/:id").get(removeSlotByDoctor);

  router.route("/refund-payment/:id").post(refundToWallet);

  router.route("/wallet-history/:id").get(walletHistory);

  router.route("/reserve-slot").post(reserveSlot);

  return router;
};
