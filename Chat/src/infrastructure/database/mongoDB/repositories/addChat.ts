import { IConversationEntity } from "@/domain/entities"
import { Chat } from "../models/chatSchema"

export const addChat = async(obj: any) => {
  console.log("i am in reopositories")
  try {
    const response = await Chat.create(obj)
    return response as IConversationEntity
  } catch (error: any) {
    console.log(error.message)
    throw new Error(error.message)
  }
}