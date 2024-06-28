import { Request, Response, NextFunction } from "express";
import { IDependencies } from "@/application/interfaces/IDependencies";

export const listAllAppointmentsController = (dependencies: IDependencies) => {
    const { useCases: { listAllAppointmentUseCase } } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const appointmentList = await listAllAppointmentUseCase(dependencies).execute();

            if(!appointmentList) {
                res.status(400).json({
                    success: false,
                    message: "error while listing appointments",
                  });
            }

            res.status(201).json({
                success: true,
                message: "appointment listed successfully",
                data: appointmentList,
              });
        } catch (error: any) {
            res.status(400).json({
                success: false,
                message: "error while listing appointments",
              });
        }
    }
}