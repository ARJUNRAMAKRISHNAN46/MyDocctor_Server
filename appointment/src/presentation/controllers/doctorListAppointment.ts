import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const doctorListAppointmentController = (dependencies: IDependencies) => {
    const { useCases: { doctorListAppointmentsUseCase } } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id;

            const appList = await doctorListAppointmentsUseCase(dependencies).execute(id);

            if(!appList) {
                res.status(400).json({
                    success: false,
                    data: null,
                    message: "finding doctor appoinments failed",
                  });
            }
        } catch (error: any) {
            res.status(400).json({
                success: false,
                message: "error while listing doctor appointments",
              });
        }
    }
}