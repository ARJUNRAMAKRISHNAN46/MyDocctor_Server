import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const listDoctorsForSideBarController = (
  dependencies: IDependencies
) => {
  const {
    useCases: { listDoctorsForSideBarUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;

      const listDoctors = await listDoctorsForSideBarUseCase(
        dependencies
      ).execute(id);

      if (!listDoctors) {
        res.status(400).json({
          success: false,
          message: "error while listing doctors",
        });
      }

      res.status(200).json({
        success: true,
        message: "list doctor successfully",
        data: listDoctors,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: "Internal server error",
      });
    }
  };
};
