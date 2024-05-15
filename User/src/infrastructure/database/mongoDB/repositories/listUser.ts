import { User } from "../models";
import { UserEntity } from "../../../../domain/entities";

export const listUser = async (): Promise<UserEntity[] | null> => {
  try {
    const users = await User.find({ role: "user" });
    console.log("🚀 ~ listUser ~ users:", users);

    return users;
  } catch (error: any) {
    console.log("🚀 ~ listUser ~ error:", error);
    return null;
  }
};
