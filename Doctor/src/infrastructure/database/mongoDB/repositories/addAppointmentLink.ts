import { User } from "../models";
import { UserEntity } from "@/domain/entities";

export const addAppointmentLink = async (
  id: string,
  link: string
): Promise<UserEntity | null> => {
  console.log("🚀 ~ link:", link)
  try {
    const linkAdded = await User.findByIdAndUpdate(id, {
      $set: {calendlyLink: link }
    });
    console.log("🚀 ~ addAppointmentLink ~ linkAdded:", linkAdded);

    if (!linkAdded) {
      throw new Error("link setting failed");
    }

    return linkAdded;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
