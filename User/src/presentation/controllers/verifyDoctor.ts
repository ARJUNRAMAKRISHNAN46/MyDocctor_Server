import { Request, Response, NextFunction } from "express";
import { IDependencies } from "@/application/interfaces/IDependencies";

export const verifyDoctorController = (dependencies: IDependencies) => {
  const {
    useCases: { verifyDoctorUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const credentials = req.body;
      console.log("🚀 ~ return ~ credentials:", credentials);

      const existUser = 0;
      console.log("🚀 ~ return ~ existUser:", existUser);
    } catch (error: any) {
      console.log(error?.message);
      console.log("error while verifying doctor!!!");
    }
  };
};
