import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const searchDoctorController = (dependencies: IDependencies) => {
  const {
    useCases: { searchDoctorUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const query = req.query.q as string;
      if (!query) {
        return res.json([]);
      }

      const searchDoctors = await searchDoctorUseCase(dependencies).execute(
        query
      );

      if (!searchDoctors) {
        res.status(400).json({
          success: false,
          data: null,
          message: "search doctor failed",
        });
      }

      res.status(200).json({
        succuss: true,
        data: searchDoctors,
        message: "search doctor successfully",
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        data: null,
        message: "error while searching doctor",
      });
    }
  };
};
