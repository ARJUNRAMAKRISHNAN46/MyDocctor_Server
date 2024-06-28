import { IDependencies } from "@/application/interfaces/IDependencies";
import { createAppoinmentController } from "./createAppointment";
import { listDoctorSlotsController } from "./listDoctorSlots";
import { slotListingController } from "./slotListing";
import { updateAppointmentController } from "./updateAppointment";
import { listUsersForSideBarController } from "./listUsersForSideBar";
import { listDoctorsForSideBarController } from "./listDoctorsForSideBar";
import { userAppointmentController } from "./userAppointment";
import { listAllAppointmentsController } from "./ListAllAppointments";
import { findSlotByIdController } from "./findSlotById";
import { removeUserIdFromSlotsController } from "./removeUserIdFromSlots";
import { removeSlotByDoctorController } from "./removeSlotByDoctor";

export const controllers = (dependencies: IDependencies) => {
  return {
    createAppoinment: createAppoinmentController(dependencies),
    listDoctorSlots: listDoctorSlotsController(dependencies),
    slotListing: slotListingController(dependencies),
    updateAppoinment: updateAppointmentController(dependencies),
    listUsersForSideBar: listUsersForSideBarController(dependencies),
    listDoctorsForSideBar: listDoctorsForSideBarController(dependencies),
    userAppointment: userAppointmentController(dependencies),
    listAllAppointments: listAllAppointmentsController(dependencies),
    findSlotById: findSlotByIdController(dependencies),
    removeUserIdFromSlot: removeUserIdFromSlotsController(dependencies),
    removeSlotByDoctor: removeSlotByDoctorController(dependencies),
  };
};
