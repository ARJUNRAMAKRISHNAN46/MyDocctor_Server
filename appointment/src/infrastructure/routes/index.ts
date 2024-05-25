import { Router } from "express";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { controllers } from "../../presentation/controllers";

export const routes = (dependencies: IDependencies) => {
  const {
   createAppoinment,
   listDoctorSlots
  } = controllers(dependencies);

  const router = Router();

  router.route("/create-appointment").post(createAppoinment);

  router.route("/list-doctor-slots/:id").get(listDoctorSlots);
  
  return router;
};
