import { Request, Response, NextFunction } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";

export const updateAppointmentController = (dependencies: IDependencies) => {
  const {
    useCases: { updateAppointmentUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      console.log("🚀 ~ return ~ data:", data);

      const updateAppoinment = await updateAppointmentUseCase(
        dependencies
      ).execute(data);

      if (!updateAppoinment) {
        return res.status(404).json({
          success: false,
          message: "Update Appointment Failed",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Update Appointment Successfully",
        data: updateAppoinment,
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: error?.message,
      });
    }
  };
};
