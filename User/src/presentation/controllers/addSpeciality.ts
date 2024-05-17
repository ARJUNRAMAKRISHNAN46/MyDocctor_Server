import { IDependencies } from "../../application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const addSpecialityController = (dependencies: IDependencies) => {
    const { useCases: { addSpecialityUseCase } } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = req.body;
            console.log("🚀 ~ return ~ data:", data);
            const addSpeciality = await addSpecialityUseCase(dependencies).execute(data);
            console.log("🚀 ~ return ~ addSpeciality:", addSpeciality);

            if (!addSpeciality) {
                res.status(400).json({
                  success: false,
                  message: "speciality adding failed",
                });
              }
        
              res.status(200).json({
                succuss: true,
                message: "speciality added successfully",
              });
        } catch (error: any) {
            res.status(400).json({
                success: false,
                message: "error while adding speciality",
              });
        }
    }
}