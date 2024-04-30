import { IDependencies } from "@/application/interfaces/IDependencies";
import { Router } from "express";

const router = Router();

export const routes = (dependecies: IDependencies) => {
  return router;
};
