import { IDependencies } from "../../application/interfaces/IDependencies";
import { blockUserProducer } from "../../infrastructure/kafka/producers/blockUserProducer";
import { Request, Response, NextFunction } from "express";

export const blockUserController = (dependencies: IDependencies) => {
  const {
    useCases: { blockUserUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      console.log("🚀 ~ returnasync ~ id:", id);

      const blocked = await blockUserUseCase(dependencies).execute(id);
      console.log("🚀 ~ returnasync ~ blocked:", blocked);

      if (!blocked) {
        res.status(400).json({
          success: false,
          message: "doctor blocking failed",
        });
      }

      res.status(200).json({
        success: true,
        message: "doctor blocked successfully",
      });

      blockUserProducer(blocked);
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: "error while blocking user",
      });
    }
  };
};
