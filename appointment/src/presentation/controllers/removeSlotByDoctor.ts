import { Request, Response, NextFunction } from "express";
import { IDependencies } from "@/application/interfaces/IDependencies";

export const removeSlotByDoctorController = (dependencies: IDependencies) => {
  const {
    useCases: { removeSlotByDoctorUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const slotId = req.params.id;
      console.log("🚀 ~ return ~ slotId:", slotId)

      const result = await removeSlotByDoctorUseCase(dependencies).execute(
        slotId
      );
      
      console.log("🚀 ~ return ~ result:", result)
      if (!result) {
        res.status(400).json({
          success: false,
          message: "error while removing slot",
        });
        return;
      }

      res.status(201).json({
        success: true,
        message: "slot removed successfully",
        data: result,
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: error?.message,
      });
    }
  };
};
