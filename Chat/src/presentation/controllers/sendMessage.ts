import { Request, Response, NextFunction } from "express";

export const sendMessageController = (dependencies: any) => {
  const {
    useCases: { sendMessageUseCase },
  } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { senderId } = req.body;
      console.log("🚀 ~ return ~ senderId:", senderId)
      const recieverId = req.params.id;
      console.log("🚀 ~ return ~ recieverId:", recieverId)
      const { message } = req.body;
      const data = await sendMessageUseCase(dependencies).execute({
        senderId,
        recieverId,
        message,
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
