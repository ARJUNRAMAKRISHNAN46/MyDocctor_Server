import { Request, Response, NextFunction } from "express";
import { IDependencies } from "@/application/interfaces/IDependencies";

export const filterDoctorController = (dependencies: IDependencies) => {
  const { useCases: { filterDoctorUseCase } } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, country, expertise, sort, consultationType } = req.query;
      console.log(req.query)
      const params = {
        name: name as string,
        country: country as string,
        expertise: expertise as string,
        sort: sort as string,
        consultationType: consultationType ? (consultationType as string).split(',') : undefined,
      };

      const doctorList = await filterDoctorUseCase(dependencies).execute(params);
      if (!doctorList) {
        return res.status(400).json({
          success: false,
          message: "Doctor filtering failed",
          data: [],
        });
      }

      res.status(200).json({
        success: true,
        message: "Doctors filtered",
        data: doctorList,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: "Error while filtering doctors",
      });
    }
  };
};
