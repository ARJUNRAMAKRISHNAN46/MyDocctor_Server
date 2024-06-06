import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const listPaymentsController = (dependencies: IDependencies) => {
  const {
    useCases: { listPaymentsUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const doctorId = req.params.id;
      const paymentsList = await listPaymentsUseCase(dependencies).execute(
        doctorId
      );

      if (!paymentsList) {
        res.status(404).json({
          success: false,
          message: "payment listing failed",
        });
      }

      res.status(200).json({
        success: true,
        data: paymentsList,
        message: "payment listing successfully",
      });
    } catch (error: any) {
      next(error);
    }
  };
};
