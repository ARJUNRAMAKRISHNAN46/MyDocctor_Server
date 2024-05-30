import { Router } from "express";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { controllers } from "../../presentation/controllers";

export const routes = (dependencies: IDependencies) => {
  const {
   createAppoinment,
   listDoctorSlots,
   slotListing,
  } = controllers(dependencies);

  const router = Router();

  router.route("/create-appointment").post(createAppoinment);

  router.route("/list-doctor-slots/:id").get(listDoctorSlots);

  router.route("/list-slots/:id").get(slotListing);
  
  return router;
};
