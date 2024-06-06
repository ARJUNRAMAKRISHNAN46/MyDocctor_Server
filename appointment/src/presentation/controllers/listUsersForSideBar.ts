import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const listUsersForSideBarController = (dependencies: IDependencies) => {
  const {
    useCases: { listUsersForSideBarUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const listUsers = await listUsersForSideBarUseCase(dependencies).execute(
        id
      );
      console.log("🚀 ~ return ~ listUsers:", listUsers);

      if (!listUsers) {
        res.status(400).json({
          success: false,
          message: "error while listing users",
        });
      }

      res.status(400).json({
        success: true,
        message: "list user successfully",
        data: listUsers,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: "Internal server error",
      });
    }
  };
};
