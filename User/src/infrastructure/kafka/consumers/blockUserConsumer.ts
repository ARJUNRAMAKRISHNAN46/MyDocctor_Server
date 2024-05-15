import { UserEntity } from "../../../domain/entities";
import { User } from "../../../infrastructure/database/mongoDB/models";

export default async (data: UserEntity) => {
  try {
    const blocked = await User.findOneAndUpdate(
      {
        email: data?.email,
      },
      {
        isActive: data?.isActive,
      },
      {
        new: true,
      }
    );
    console.log("🚀 ~ blocked:", blocked)
  } catch (error: any) {
    console.error(error?.message);
  }
};
