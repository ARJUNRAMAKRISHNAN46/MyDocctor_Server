import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const findUserByIdController = (dependencies: IDependencies) => {
  const {
    useCases: { findUserByIdUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.params.id;
      const user = await findUserByIdUseCase(dependencies).execute(userId);
      console.log("🚀 ~ returnasync ~ user:", user);
      if (!user) {
        res.status(401).json({
          success: false,
          message: "Error while finding doctor",
        });
      }

      res.status(200).json({
        success: false,
        data: user,
        message: "find user successfully",
      });
    } catch (error: any) {
      res.status(401).json({
        success: false,
        message: "Internal server error!",
      });
    }
  };
};
