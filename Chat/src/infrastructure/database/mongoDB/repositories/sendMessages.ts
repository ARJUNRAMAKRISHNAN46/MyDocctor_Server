import { ObjectId } from "mongodb";
import Conversation from "../models/conversation.model";
import Message from "../models/message.model";

export interface sendMessageInputs {
  senderId: ObjectId;
  recieverId: ObjectId;
  message: string;
  type: string;
  replyTo: string;
}

export const sendMessage = async (data: sendMessageInputs) => {
  try {
    const newMessage = await Message.create({
      senderId: data?.senderId,
      recieverId: data?.recieverId,
      message: data?.message,
      type: data?.type,
      replyTo: data?.replyTo ,
    });
    
    let conversation = await Conversation.findOne({
      participants: { $all: [data?.senderId, data?.recieverId] },
    });
    
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [data?.senderId, data?.recieverId],
        latestMessage: newMessage._id,
        messages: [newMessage._id],
      });
    } else {
      conversation.latestMessage = newMessage._id;
      conversation.messages.push(newMessage._id);
      await conversation.save();
    }
    
    return newMessage;
    
  } catch (error: any) {
    throw new Error(error.message);
  }
};
