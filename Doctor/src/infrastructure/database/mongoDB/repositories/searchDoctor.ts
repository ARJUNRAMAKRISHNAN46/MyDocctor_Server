import { User } from "../models";
import { UserEntity } from "@/domain/entities";

export const searchDoctor = async (
  query: string
): Promise<UserEntity[] | null> => {
  try {
    const doctors = await User.find({ name: new RegExp(query, "i") , role: "doctor", isVerified: true}).limit(10);
    return doctors;
  } catch (error: any) {
    console.log("🚀 ~ searchDoctor ~ error:", error);
    return null;
  }
};
