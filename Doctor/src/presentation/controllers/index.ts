import { IDependencies } from "@/application/interfaces/IDependencies";
import { verifyDoctorController } from "./verifyDoctor";
import { updateProfileController } from "./updateProfile";
import { listDoctorController } from "./listDoctors";
import { findDoctorByIdController } from "./findDoctorById";
import { blockUserController } from "./blockUser";
export const controllers = (dependencies: IDependencies) => {
  return {
    verifyDoctor: verifyDoctorController(dependencies),
    updateProfile: updateProfileController(dependencies),
    listDoctors: listDoctorController(dependencies),
    findDoctorById: findDoctorByIdController(dependencies),
    blockUser: blockUserController(dependencies),
  };
};
