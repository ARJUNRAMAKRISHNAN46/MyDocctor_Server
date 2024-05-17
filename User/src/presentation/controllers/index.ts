import { IDependencies } from "@/application/interfaces/IDependencies";
import { loginController } from "./login";
import { signupController } from "./signup";
import { logoutController } from "./logout";
import { isExistController } from "./isExist";
import { signupWithGoogle } from "./signupWithGoogle";
import { loginWithGoogle } from "./loginWithGoogle";
import { updatePassword } from "./updatePassword";
import { forgotPassword } from "./forgotPassword";
import { verifyDoctorController } from "./verifyDoctor";
import { listUserController } from "./listUser";
import { addSpecialityController } from "./addSpeciality";
import { listSpecialityController } from "./listSpeciality";

export const controllers = (dependencies: IDependencies) => {
  return {
    login: loginController(dependencies),
    signup: signupController(dependencies),
    logout: logoutController(dependencies),
    isExist: isExistController(dependencies),
    signupGoogle: signupWithGoogle(dependencies),
    loginGoogle: loginWithGoogle(dependencies),
    updatePassword: updatePassword(dependencies),
    forgotPassword: forgotPassword(dependencies),
    verifyDoctor: verifyDoctorController(dependencies),
    listUser: listUserController(dependencies),
    addSpeciality: addSpecialityController(dependencies),
    listSpeciality: listSpecialityController(dependencies),
  };
};
