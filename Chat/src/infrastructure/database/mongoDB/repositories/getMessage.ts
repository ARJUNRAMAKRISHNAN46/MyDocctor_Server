import { IMessageEntity } from "@/domain/entities";
import { Chat } from "../models/chatSchema";

export const getMessage = async (id: string) => {
  try {
    const response = await Chat.findOne({ _id: id }).populate("chatId");
    return response as unknown as IMessageEntity[];
  } catch (error: any) {
    throw new Error(error.message);
  }
};
