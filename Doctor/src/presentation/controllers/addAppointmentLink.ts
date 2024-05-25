import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const addAppointmentLinkController = (dependencies: IDependencies) => {
    const { useCases: { addAppointmentLinkUseCase } } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = req.body;
            const id = req.params.id;
            
            const addedLink = await addAppointmentLinkUseCase(dependencies).execute(id, data?.link);

            if(!addedLink) {
                res.status(400).json({
                    success: false,
                    message: "link added failed"
                });
            }

            res.status(200).json({
                success: true,
                message: "link added successfully"
            });
        } catch (error: any) {
            res.status(400).json({
                success: false,
                message: "error occured while adding appointment",
            })
        }
    }
}