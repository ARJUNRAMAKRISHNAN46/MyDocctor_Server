// import Conversation from "../models/conversation.model"

// export const getChat = async(obj: any) => {
//   console.log("i am in reopositories")
//   try {
//     const response = await Conversation.find(obj).populate('latestMessage')
//     console.log("🚀 ~ getChat ~ response:", response)
//     return response
//   } catch (error: any) {
//     console.log(error.message)
//     throw new Error(error.message)
//   }
// }