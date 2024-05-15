
import { UserEntity } from "../../../domain/entities";
import { User } from "../../../infrastructure/database/mongoDB/models";

export default async (data: UserEntity) => {
  try {
    const update = await User.findOneAndUpdate(
      {
        email: data?.email,
        role: "doctor",
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
    console.log("🚀 ~ updated:", update);
  } catch (error: any) {
    console.error(error?.message);
  }
};
