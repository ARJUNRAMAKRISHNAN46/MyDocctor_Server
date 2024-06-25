import { Request, Response, NextFunction } from "express";

export const sendMessageController = (dependencies: any) => {
  const {
    useCases: { sendMessageUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { senderId, type, message, replyTo } = req.body;
      console.log("🚀 ~ return ~ replyTo:", replyTo)
      const recieverId = req.params.id;
      const data = await sendMessageUseCase(dependencies).execute({
        senderId,
        recieverId,
        message,
        type,
        replyTo
      });
      res.status(200).json({
        success: true,
        message: "message sent successfully",
        data: data,
      });
    } catch (error: any) {
      console.log("🚀 ~ return ~ error:", error);
      next(error);
    }
  };
};
