import { IDependencies } from "@/application/interfaces/IDependencies";
import { addSpecialityController } from "./addSpeciality";
import { verifyDoctorController } from "./verifyDoctor";

export const controllers = (dependencies: IDependencies) => {
  return {
    addSpeciality: addSpecialityController(dependencies),
    verifyDoctor: verifyDoctorController(dependencies),
  };
};
