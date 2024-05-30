import { IDependencies } from "@/application/interfaces/IDependencies";
import { createAppoinmentController } from "./createAppointment";
import { listDoctorSlotsController } from "./listDoctorSlots";
import { slotListingController } from "./slotListing";

export const controllers = (dependencies: IDependencies) => {
  return {
   createAppoinment: createAppoinmentController(dependencies),
   listDoctorSlots: listDoctorSlotsController(dependencies),
   slotListing: slotListingController(dependencies),
  };
};
