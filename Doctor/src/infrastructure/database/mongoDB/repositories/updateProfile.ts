import { User } from "../models";
import { UserEntity } from "../../../../domain/entities";

export const updateProfile = async (
  data: UserEntity
): Promise<UserEntity | null> => {
  try {
    const { email, ...rest } = data;

    const updated = await User.findOneAndUpdate(
      { email },
      { $set: { ...rest } ,isProfile: true},
      { new: true }
    );

    if (!updated) {
      throw new Error("User not found");
    }

    return updated.toObject();
  } catch (error: any) {
    throw new Error(error.message);
  }
};
