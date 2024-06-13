import { ObjectId } from "mongodb";
import Conversation from "../models/conversation.model";

export interface getMessageInputs {
  senderId: ObjectId;
  recieverId: ObjectId;
}

export const getMessage = async (data: getMessageInputs) => {
  console.log("🚀 ~ getMessage ~ data:", data)
  try {
    console.log("🚀 ~ userToChatId:", data.senderId)
    console.log("🚀 ~ senderId:", data.recieverId)

    const conversation = await Conversation.findOne({
      participants: { $all: [data?.senderId, data?.recieverId] },
    }).populate("messages");
    console.log("🚀 ~ conversation:", conversation)

    return conversation
  } catch (error: any) {
    throw new Error(error.message);
  }
};
