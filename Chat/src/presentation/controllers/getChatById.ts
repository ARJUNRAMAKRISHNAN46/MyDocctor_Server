import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getChatByIdController = (dependencies: IDependencies) => {
  const {
    useCases: { getMessageUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const data = await getMessageUseCase(dependencies).execute(id);
      res.json({ status: true, payload: data });
    } catch (error: any) {
      console.log("🚀 ~ return ~ error:", error);
      next(error);
    }
  };
};
