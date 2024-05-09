import { IDependencies } from "@/application/interfaces/IDependencies";
import { loginController } from "./login";
import { logoutController } from "./logout";
import { verifyDoctorController } from "./verifyDoctor";
import { isExistController } from "./isExist";
import { loginWithGoogle } from "./loginWithGoogle";
import { updatePassword } from "./updatePassword";
import { forgotPassword } from "./forgotPassword";

export const controllers = (dependencies: IDependencies) => {
  return {
    login: loginController(dependencies),
    logout: logoutController(dependencies),
    verifyDoctor: verifyDoctorController(dependencies),
    isExist: isExistController(dependencies),
    loginGoogle: loginWithGoogle(dependencies),
    updatePassword: updatePassword(dependencies),
    forgotPassword: forgotPassword(dependencies),
  };
};
