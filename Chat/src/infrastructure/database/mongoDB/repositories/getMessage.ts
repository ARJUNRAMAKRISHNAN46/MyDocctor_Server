import Conversation from "../models/conversation.model";

interface Inputs {
  userToChatId: string;
  senderId: string;
}

export const getMessage = async ({ userToChatId, senderId }: Inputs) => {
  try {
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");

    return conversation;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
