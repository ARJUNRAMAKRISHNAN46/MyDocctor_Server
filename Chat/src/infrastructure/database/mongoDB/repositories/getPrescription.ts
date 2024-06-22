import Message from "../models/message.model";

export const getPrescription = async (recieverId: string) => {
  try {
    const prescriptions = await Message.find({ recieverId: recieverId, type: "image" });
    console.log("🚀 ~ getPrescription ~ prescriptions:", prescriptions)

    return prescriptions;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
