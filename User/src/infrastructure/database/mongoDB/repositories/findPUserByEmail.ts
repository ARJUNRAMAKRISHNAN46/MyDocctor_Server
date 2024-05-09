import { User } from "../models";
import { UserEntity } from "../../../../domain/entities";

export const findUserByEmail = async (
  email: string
): Promise<UserEntity | null> => {
  try {
    const existUser = await User.findOne({ email: email });
    console.log("🚀 ~ existUser:", existUser)
    
    return existUser;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
