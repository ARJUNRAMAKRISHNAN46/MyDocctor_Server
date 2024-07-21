import Message from "../../infrastructure/database/mongoDB/models/message.model";
import Conversation from "../../infrastructure/database/mongoDB/models/conversation.model";
import { Request, Response, NextFunction } from "express";

export const getLastMessageController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { senderId } = req.body;
    const receiverId = req.params.id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] }
    }).populate("messages");

    if (!conversation || !conversation.latestMessage) {
      return res.status(404).json({
        success: false,
        message: "No conversation or latest message found",
      });
    }

    const message = await Message.findOne({_id: conversation?.latestMessage});
    console.log("🚀 ~ message:", message)

    return res.status(200).json({
      success: true,
      message: "Last message fetched successfully",
      data: message,
    });
  } catch (error: any) {
    console.log("🚀 ~ error:", error)
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
