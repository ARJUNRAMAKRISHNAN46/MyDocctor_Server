import { UserEntity } from "@/domain/entities";
import { User } from "../models";
import { verifyToken } from "../../../../utils/jwt";

export const isExist = async (token: string): Promise<UserEntity | null> => {
  try {
    const decodeValue: any = verifyToken(token);

    if (decodeValue) {
      const user = await User.findOne({ _id: decodeValue._id });
      return user as UserEntity;
    } else {
      throw new Error("Could not verify user");
    }
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
