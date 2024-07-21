import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";

export const savePaymentController = (dependencies: IDependencies) => {
  const {
    useCases: { savePaymentUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      console.log("🚀 ~ file: savePayment.ts:11 ~ return ~ data:", data);
      const response = await savePaymentUseCase(dependencies).execute(data);
      if (!response) {
        res.status(400).json({
          success: false,
          message: "Payment creation failed",
        });
        return;
      }
      res.status(200).json({
        success: true,
        message: "Payment created successfully",
        data: response,
      });
    } catch (error) {
      next(error);
    }
  };
};
