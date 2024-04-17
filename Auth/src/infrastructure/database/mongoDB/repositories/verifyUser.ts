import { User } from "../models";
import { UserEntity } from "../../../../domain/entities";

export const verifyUser = async (
  email: string
): Promise<UserEntity | null> => {
  try {
    const update = await User.findOneAndUpdate(
      {
        email: email,
      },
      {
        isVerified: true,
        otp: "",
      },
      {
        new: true,
      }
    );

    if (!update) {
      throw new Error("User verified failed");
    }

    return update;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
