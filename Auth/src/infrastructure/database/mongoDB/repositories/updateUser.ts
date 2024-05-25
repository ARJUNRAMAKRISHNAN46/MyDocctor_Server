import { User } from "../models";
import { UserEntity } from "../../../../domain/entities";

export const updateUser = async (
  data: UserEntity
): Promise<UserEntity | null> => {
  try {
    const { email, ...rest } = data;
    console.log("🚀 ~ email:", email)

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
    throw new Error(error?.message);
  }
};
