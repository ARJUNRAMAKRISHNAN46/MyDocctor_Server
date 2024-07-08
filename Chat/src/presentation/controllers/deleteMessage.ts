import { Request, Response, NextFunction } from "express";

export const deleteMessageController = (dependencies: any) => {
  const {
    useCases: { deleteMessageUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const msgId = req.params.id;

      const data = await deleteMessageUseCase(dependencies).execute(msgId);
      console.log("🚀 ~ return ~ data:", data)

      if(!data) {
        res.status(402).json({
            success: false,
            message: "message delete failed",
            data: data,
          });
      }

      res.status(200).json({
        success: true,
        message: "message delete successfully.",
        data: data,
      });
    } catch (error: any) {
      next(error);
    }
  };
};
