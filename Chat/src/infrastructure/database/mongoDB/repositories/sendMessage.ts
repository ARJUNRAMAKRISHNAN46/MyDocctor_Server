import { Chat } from "../models";
import { Message } from "../models";

export const sendMessage = async ({ content, chatId, userId }: any) => {
  try {
    const newMessage = {
      chatId,
      content,
      sender: userId,
    };

    const message = await Message.create(newMessage);
    const latestMessage = await Chat.findByIdAndUpdate(chatId, {
      latestMessage: message,
    });
    console.log("🚀 ~ sendMessage ~ latestMessage:", latestMessage);

    const chats = await Message.find({ chatId }).populate("chatId");

    const data = {
      message,
      chats,
    };
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
