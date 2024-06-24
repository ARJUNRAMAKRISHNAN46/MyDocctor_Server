import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const findSlotByIdController = (dependencies: IDependencies) => {
  const {
    useCases: { findSlotByIdUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const slotId = req.params.id;

      const slot = await findSlotByIdUseCase(dependencies).execute(slotId);

      if (!slot) {
        res.status(400).json({
          success: false,
          message: "error while fetching slot",
        });
      }

      res.status(201).json({
        success: true,
        message: "slot fetched successfully",
        data: slot,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: "Internal server error",
      });
    }
  };
};
