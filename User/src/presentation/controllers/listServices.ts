import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const listServiceController = (dependencies: IDependencies) => {
  const {
    useCases: { listServiceUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const serviceList = await listServiceUseCase(dependencies).execute();

      if (!serviceList) {
        res.status(400).json({
          success: false,
          message: "service listing failed",
          data: [],
        });
      }

      res.status(200).json({
        success: true,
        message: "service listed",
        data: serviceList,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: "error while listing services",
      });
    }
  };
};
