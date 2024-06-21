import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const listAllPaymentsController = (dependencies: IDependencies) => {
  const {
    useCases: { listAllPaymentsUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const paymentList = await listAllPaymentsUseCase(dependencies).execute();

      if (!paymentList) {
        res.status(404).json({
          success: false,
          message: "payment listing failed",
        });
      }

      res.status(200).json({
        success: true,
        data: paymentList,
        message: "payment listing successfully",
      });
    } catch (error: any) {
      next(error);
    }
  };
};
