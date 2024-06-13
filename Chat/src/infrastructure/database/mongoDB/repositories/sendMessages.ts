import { ObjectId } from "mongodb";
import Conversation from "../models/conversation.model";
import Message from "../models/message.model";

export interface sendMessageInputs {
  senderId: ObjectId;
  recieverId: ObjectId;
  message: string;
}

export const sendMessage = async (data: sendMessageInputs) => {
  console.log("🚀 ~ sendMessage ~ data:", data);
  try {
    const newMessage = await Message.create({
      senderId: data?.senderId,
      recieverId: data?.recieverId,
      message: data?.message,
    });
    console.log("123456");

    const conversationData = await Conversation.findOneAndUpdate(
      {
        participants: { $all: [data?.senderId, data?.recieverId] },
      },
      {
        latestMessage: newMessage._id,
        $push: { messages: newMessage._id },
      },
      {
        new: true,
        upsert: true,
      }
    );
    console.log("7890123");

    return conversationData;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
