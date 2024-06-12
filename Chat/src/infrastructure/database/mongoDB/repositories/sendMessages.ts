import { IMessageEntity } from "@/domain/entities";
import { Chat } from "../models/chatSchema";
import { Message } from "../models/messageSchema"

export const sendMessage = async (obj:any) => {
  try {

    const {chatId,...chatData} = obj
    
    
    console.log("hello",chatData)
    const message = await Message.create(chatData);

   const data = await Chat.findByIdAndUpdate(chatId, {
      latestMessage: message._id, 
      $push: { chatId: message._id }
    });


    return data as unknown as IMessageEntity;

  } catch (error: any) {
    throw new Error(error.message);
  }
};