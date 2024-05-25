import { User } from "../models";
import { UserEntity } from "../../../../domain/entities";

export const listDoctor = async (): Promise<UserEntity[] | null> => {
  try {
    const doctors = await User.find({role: "doctor", isVerified: true, isActive: true});
    console.log("🚀 ~ listUser ~ doctors:", doctors);

    return doctors;
  } catch (error: any) {
    console.log("🚀 ~ listUser ~ error:", error);
    return null;
  }
};
