import { User } from "../models";
import { UserEntity } from "../../../../domain/entities";

export const verifyUser = async (email: string): Promise<UserEntity | null> => {
  try {
    console.log("🚀 ~ email:", email);

    const update = await User.findOneAndUpdate(
      {
        email: email,
        role: "doctor"
      },
      {
        isVerified: true,
        isActive: true,
        otp: "",
      },
      {
        new: true,
      }
    );
    console.log("🚀 ~ update:", update);

    if (!update) {
      throw new Error("User verified failed");
    }

    return update;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
