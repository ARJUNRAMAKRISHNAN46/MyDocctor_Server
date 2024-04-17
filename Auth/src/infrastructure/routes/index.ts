import { Router } from "express";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { controllers } from "../../presentation/controllers";

export const routes = (dependencies: IDependencies) => {
  const { login, signup, logout, isExist } = controllers(dependencies);

  const router = Router();

  router.route("/login").post(login);

  router.route("/signup").post(signup);

  router.route('/logout').get(logout);

  router.route('/isExist').get(isExist);

  return router;
};
