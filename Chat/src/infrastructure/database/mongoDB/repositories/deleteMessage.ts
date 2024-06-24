import Conversation from "../models/conversation.model";
import Message from "../models/message.model";

export const deleteMessage = async (msgId: string) => {
  try {
    const dltmsg = await Message.findByIdAndDelete(msgId);
    console.log("🚀 ~ deleteMessage ~ dltmsg:", dltmsg)

    if (dltmsg) {
      await Conversation.findOneAndUpdate(
        { messages: msgId },
        { $pull: { messages: msgId } }
      );
    }

    return dltmsg;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
