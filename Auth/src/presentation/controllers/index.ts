import { IDependencies } from "@/application/interfaces/IDependencies";
import { loginController } from "./login";
import { signupController } from "./signup";
import { logoutController } from "./logout";
import { isExistController } from "./isExist";
import { signupWithGoogle } from "./signupWithGoogle";
import { loginWithGoogle } from "./loginWithGoogle";
import { updatePassword } from "./updatePassword";
import { forgotPassword } from "./forgotPassword";
import { findUserByIdController } from "./findUserById";

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
    findUserById: findUserByIdController(dependencies),
  };
};
