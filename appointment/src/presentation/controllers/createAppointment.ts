import { Request, Response, NextFunction } from "express";
import { IDependencies } from "../../application/interfaces/IDependencies";

export const createAppoinmentController = (dependencies: IDependencies) => {
  const {
    useCases: { createAppointmentUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      // console.log("🚀 ~ return ~ data:", data);

      const createAppoinment = await createAppointmentUseCase(dependencies).execute(data?.appointmentData);
      // console.log("🚀 ~ return ~ createAppoinment:", createAppoinment);

      if (!createAppoinment) {
        return res
          .status(400)
          .json({ success: false, message: "Doctor slot date already exists. Please choose the edit option." });
      }

      return res
        .status(200)
        .json({ success: true, message: "Appointment created successfully", data: createAppoinment });

    } catch (error: any) {
      res.status(401).json({
        success: false,
        message: error?.message,
      });
    }
  };
};
