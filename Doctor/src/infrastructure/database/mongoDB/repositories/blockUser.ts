import { User } from "../models";
import { UserEntity } from "@/domain/entities";

export const blockUser = async (id: string): Promise<UserEntity | null> => {
  try {
    console.log("🚀 ~ blockUser ~ id:", id);

    const existUser = await User.findById(id);
    console.log("🚀 ~ blockUser ~ existUser:", existUser);
    let status: boolean = false;
    if (existUser?.isActive === false) {
      status = true;
    }
    console.log("🚀 ~ blockUser ~ status:", status);
    const blocked = await User.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        isActive: status,
      },
      {
        new: true,
      }
    );
    console.log("🚀 ~ blockUser ~ blocked:", blocked);

    if (!blocked) {
      console.log("user blocked failed");
      return null;
    }

    return blocked;
  } catch (error: any) {
    return null;
  }
};
