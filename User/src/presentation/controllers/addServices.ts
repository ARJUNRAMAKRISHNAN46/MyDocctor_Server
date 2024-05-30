import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const addServiceController = (dependencies: IDependencies) => {
    const { useCases: { addServiceUseCase } } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = req.body;

            const addService = await addServiceUseCase(dependencies).execute(data);

            if (!addService) {
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
                message: "error while adding services",
              });
        }
    }
}