import { Chat } from "../models/chatSchema"

export const getChat = async(obj: any) => {
  console.log("i am in reopositories")
  try {
    const response = await Chat.find(obj).populate('latestMessage')
    return response
  } catch (error: any) {
    console.log(error.message)
    throw new Error(error.message)
  }
}