import { IDependencies } from "@/application/interfaces/IDependencies";
import { verifyDoctorController } from "./verifyDoctor";
import { updateProfileController } from "./updateProfile";
import { listDoctorController } from "./listDoctors";
import { findDoctorByIdController } from "./findDoctorById";
import { blockUserController } from "./blockUser";
import { updateBookingController } from "./updateBooking";
import { findDoctorBySpecialityController } from "./findDoctorBySpeciality";
import { addAppointmentLinkController } from "./addAppointmentLink";
import { filterDoctorController } from "./filterDoctor";
import { searchDoctorController } from "./searchDoctor";
export const controllers = (dependencies: IDependencies) => {
  return {
    verifyDoctor: verifyDoctorController(dependencies),
    updateProfile: updateProfileController(dependencies),
    listDoctors: listDoctorController(dependencies),
    findDoctorById: findDoctorByIdController(dependencies),
    blockUser: blockUserController(dependencies),
    updateBooking: updateBookingController(dependencies),
    findDoctorBySpeciality: findDoctorBySpecialityController(dependencies),
    addAppointmentLink: addAppointmentLinkController(dependencies),
    filterDoctor: filterDoctorController(dependencies),
    searchDoctor: searchDoctorController(dependencies),
  };
};
