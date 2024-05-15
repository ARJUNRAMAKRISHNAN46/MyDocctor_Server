import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const listDoctorController = (dependencies: IDependencies) => {
  const {
    useCases: { listDoctorsUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const doctorList = await listDoctorsUseCase(dependencies).execute();
      console.log("🚀 ~ return ~ doctorList:", doctorList);

      if (!doctorList) {
        res.status(400).json({
          success: false,
          message: "doctor listing failed",
          data: [],
        });
      }

      res.status(200).json({
        success: true,
        message: "doctor listed",
        data: doctorList,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: "error while doctor listing!!!",
      });
    }
  };
};
