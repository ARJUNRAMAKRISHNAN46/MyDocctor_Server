import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const listDoctorSlotsController = (dependencies: IDependencies) => {
    const { useCases: { listDoctorSlotsUseCase } } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id;
            const selectedDate = String(req.query.date);

            const listDoctorSlots = await listDoctorSlotsUseCase(dependencies).execute(id, selectedDate);

            if (!listDoctorSlots) {
                res.status(400).json({
                  success: false,
                  data: null,
                  message: "finding doctor slots failed",
                });
              }
        
              res.status(200).json({
                succuss: true,
                data: listDoctorSlots,
                message: "doctor slots listed successfully",
              });
        } catch (error: any) {
            res.status(400).json({
                success: false,
                message: "error while listing doctor slots!!!",
              });
        }
    }
}