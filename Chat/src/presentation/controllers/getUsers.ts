
import { Request, Response, NextFunction } from "express";

export const getUsersController = (dependencies: any) => {
  const {
    useCases: { getUsersUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.params.id;
      const data = await getUsersUseCase(dependencies).execute(userId);

      res.json({ status: true, payload: data });
    } catch (error: any) {
      console.log("🚀 ~ return ~ error: ", error);
      next(error);
    }
  };
};
