import { IDependencies } from "@/application/interfaces/IDependencies";
import { verifyDoctorController } from "./verifyDoctor";
import { listUserController } from "./listUser";
import { addSpecialityController } from "./addSpeciality";
import { listSpecialityController } from "./listSpeciality";
import { updateProfileController } from "./updateProfile";

export const controllers = (dependencies: IDependencies) => {
  return {
    verifyDoctor: verifyDoctorController(dependencies),
    listUser: listUserController(dependencies),
    addSpeciality: addSpecialityController(dependencies),
    listSpeciality: listSpecialityController(dependencies),
    updateProfile: updateProfileController(dependencies),
  };
};
