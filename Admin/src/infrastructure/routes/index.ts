import { Router } from "express";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { controllers } from "../../presentation/controllers";

export const routes = (dependencies: IDependencies) => {
  const {
    login,
    signup,
    logout,
    isExist,
    signupGoogle,
    loginGoogle,
    updatePassword,
    forgotPassword,
  } = controllers(dependencies);

  const router = Router();

  router.route("/login").post(login);

  router.route("/signup").post(signup);

  router.route("/logout").get(logout);

  router.route("/isExist").get(isExist);

  router.route("/googleSignup").post(signupGoogle);

  router.route("/googleLogin").post(loginGoogle);

  router.route("/updatePassword").post(updatePassword);

  router.route("/forgotPassword").post(forgotPassword);

  return router;
};