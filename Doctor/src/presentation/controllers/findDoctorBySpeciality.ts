import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const findDoctorBySpecialityController = (
  dependencies: IDependencies
) => {
  const {
    useCases: { findDoctorBySpecialityUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.query.speciality;
      console.log("🚀 ~ return ~ data: ", data);

      const doctorList = await findDoctorBySpecialityUseCase(dependencies).execute(String(data));
      console.log("🚀 ~ return ~ doctorList:", doctorList);

      if (!doctorList) {
        res.status(400).json({
          success: false,
          data: null,
          message: "finding doctor failed",
        });
      }

      res.status(200).json({
        succuss: true,
        data: doctorList,
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
