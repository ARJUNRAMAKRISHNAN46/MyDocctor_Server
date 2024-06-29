import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const refundToWalletController = (dependencies: IDependencies) => {
  const {
    useCases: { refundToWalletUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = {
        userId: req.params.id,
        amount: req.body?.amount,
        reason: req.body?.reason,
        date: req.body?.date,
      };
      console.log("🚀 ~ return ~ data:", data);
      const wallet = await refundToWalletUseCase(dependencies).execute(data);

      if (!wallet) {
        res.status(404).json({
          success: false,
          message: "payment refund failed",
        });
      }

      res.status(201).json({
        success: true,
        message: "payment refund successful",
        data: wallet,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: "Internal server error",
      });
    }
  };
};
