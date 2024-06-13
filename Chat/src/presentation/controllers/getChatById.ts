import { Request, Response, NextFunction } from "express";

export const getChatByIdController = (dependencies: any) => {
  const {
    useCases: { getMessageUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { senderId } = req.body;
      const recieverId = req.params.id;
      const data = await getMessageUseCase(dependencies).execute({senderId, recieverId});
      res.json({ status: true, payload: data });
    } catch (error: any) {
      console.log("🚀 ~ return ~ error:", error);
      next(error);
    }
  };
};
