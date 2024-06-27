import { Router } from "express";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { controllers } from "../../presentation/controllers";
import { JWTMiddleware } from "../../utils/middleware/JWTMiddleware";

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
    findUserById,
  } = controllers(dependencies);

  const router = Router();

  router.route("/login").post(login);

  router.route("/signup").post(JWTMiddleware, signup);

  router.route("/logout").get(logout);

  router.route("/isExist").get(isExist);

  router.route("/googleSignup").post(JWTMiddleware, signupGoogle);

  router.route("/googleLogin").post(JWTMiddleware, loginGoogle);

  router.route("/updatePassword").post(updatePassword);

  router.route("/forgotPassword").post(forgotPassword);

  router.route("/find-user/:id").get(findUserById);

  return router;
};
