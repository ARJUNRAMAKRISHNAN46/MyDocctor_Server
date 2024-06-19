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
    
    // Check if a conversation already exists between the participants
    let conversation = await Conversation.findOne({
      participants: { $all: [data?.senderId, data?.recieverId] },
    });
    
    if (!conversation) {
      // If the conversation doesn't exist, create a new one
      conversation = await Conversation.create({
        participants: [data?.senderId, data?.recieverId],
        latestMessage: newMessage._id,
        messages: [newMessage._id],
      });
    } else {
      // If the conversation exists, update it with the new message
      conversation.latestMessage = newMessage._id;
      conversation.messages.push(newMessage._id);
      await conversation.save();
    }
    
    return newMessage;
    
  } catch (error: any) {
    throw new Error(error.message);
  }
};
