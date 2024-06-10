import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const userAppointmentController = (dependencies: IDependencies) => {
  const {
    useCases: { userAppointmentUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;

      const appointmentList = await userAppointmentUseCase(
        dependencies
      ).execute(id);

      if (!appointmentList) {
        res.status(400).json({
          success: false,
          message: "error while listing user appointments",
        });
      }

      res.status(201).json({
        success: true,
        message: "user appointment listed successfully",
        data: appointmentList,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: "error while listing user appointments",
      });
    }
  };
};
