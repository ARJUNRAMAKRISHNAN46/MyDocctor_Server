import { ObjectId } from "mongodb";
import Conversation from "../models/conversation.model";

export interface getMessageInputs {
  senderId: ObjectId;
  recieverId: ObjectId;
}

export const getMessage = async (data: getMessageInputs) => {
  try {

    const conversation = await Conversation.findOne({
      participants: { $all: [data?.senderId, data?.recieverId] },
    }).populate("messages");

    return conversation
  } catch (error: any) {
    throw new Error(error.message);
  }
};
