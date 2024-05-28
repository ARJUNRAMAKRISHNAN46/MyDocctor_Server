import { User } from "../models";
import { UserEntity } from "../../../../domain/entities";

export const updateUser = async (
  data: UserEntity
): Promise<UserEntity | null> => {
  try {
    const { email, ...rest } = data;
const exist = await User.find();
    console.log("🚀 ~ exist:", exist)
    const updated = await User.findOneAndUpdate(
      { email: email },
      {
        $set: { ...rest },
      },
      {
        new: true,
      }
    );

    if (!updated) {
      throw new Error("User update failed");
    }

    return updated;
  } catch (error: any) {
    console.error("Error updating user:", error.message);
    throw new Error(`Failed to update user: ${error.message}`);
  }
};
