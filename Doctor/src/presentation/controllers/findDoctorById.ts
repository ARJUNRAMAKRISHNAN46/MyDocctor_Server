import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const findDoctorByIdController = (dependencies: IDependencies) => {
  const {
    useCases: { findUserByIdUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const data = req.body;
      console.log("🚀 ~ return ~ id:", id);
      console.log("🚀 ~ return ~ data:", data);

      const existDoctor = await findUserByIdUseCase(dependencies).execute(
        id
      );
      console.log("🚀 ~ return ~ existDoctor:", existDoctor);

      if (!existDoctor) {
        res.status(400).json({
          success: false,
          data: null,
          message: "finding doctor failed",
        });
      }

      res.status(200).json({
        succuss: true,
        data: existDoctor,
        message: "find doctor successfully",
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        data: null,
        message: "error while finding doctor",
      });
    }
  };
};
