import { Router } from "express";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { controllers } from "../../presentation/controllers";
import { JWTMiddleware } from "../../utils/middleware/JWTMiddleware";

export const routes = (dependencies: IDependencies) => {
  const {
    createAppoinment,
    listDoctorSlots,
    slotListing,
    updateAppoinment,
    listUsersForSideBar,
  } = controllers(dependencies);

  const router = Router();

  router.route("/create-appointment").post(JWTMiddleware, createAppoinment);

  router.route("/list-doctor-slots/:id").get(JWTMiddleware, listDoctorSlots);

  router.route("/list-slots/:id").get(JWTMiddleware, slotListing);

  router.route("/update-appoinment").post(JWTMiddleware, updateAppoinment);

  router.route("/list-users/:id").get(listUsersForSideBar);

  return router;
};
