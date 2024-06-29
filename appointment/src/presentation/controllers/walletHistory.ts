import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const walletHistoryController = (dependencies: IDependencies) => {
  const {
    useCases: { walletHistoryUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.params.id;
      const walletHistory = await walletHistoryUseCase(dependencies).execute(
        userId
      );

      if (!walletHistory) {
        res.status(404).json({
          success: false,
          message: "wallet history listing failed",
        });
      }

      res.status(200).json({
        success: false,
        message: "wallet history listed successfully",
        data: walletHistory,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: "Internal server error",
      });
    }
  };
};
