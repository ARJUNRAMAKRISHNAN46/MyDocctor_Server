import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getChatController = (dependencies: IDependencies) => {
  const {
    useCases: { getChatUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await getChatUseCase(dependencies).execute(req.body);
      res.json({ status: true, payload: data });
    } catch (error: any) {
      console.log("🚀 ~ return ~ error:", error);
      next(error);
    }
  };
};
