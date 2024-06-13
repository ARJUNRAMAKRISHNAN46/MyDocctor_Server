import Conversation from "../models/conversation.model";
import Message from "../models/message.model";

interface Inputs {
  senderId: string;
  recieverId: string;
  message: string;
}

export const sendMessage = async ({
  senderId,
  recieverId,
  message,
}: Inputs) => {
  try {
    const newMessage = await Message.create({
      senderId: senderId,
      recieverId: recieverId,
      message: message,
    });

    const data = await Conversation.findOneAndUpdate(
      {
        participants: { $all: [senderId, recieverId] },
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

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
