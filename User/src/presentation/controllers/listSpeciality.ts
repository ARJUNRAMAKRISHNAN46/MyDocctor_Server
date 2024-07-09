import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const listSpecialityController = (dependencies: IDependencies) => {
    const { useCases: { listSpecialityUseCase } } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const specialityList = await listSpecialityUseCase(dependencies).execute();
            console.log("🚀 ~ return ~ specialityList:", specialityList)
            
            if (!specialityList) {
                res.status(400).json({
                  success: false,
                  message: "speciality listing failed",
                  data: [],
                });
              }
        
              res.status(200).json({
                success: true,
                message: "speciality listed",
                data: specialityList,
              }); 
        } catch (error: any) {
            res.status(400).json({
                success: false,
                message: "error while listing speciality",
              });
        }
    }
}