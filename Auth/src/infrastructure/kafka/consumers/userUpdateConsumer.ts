import { UserEntity } from "../../../domain/entities";
import { User } from "../../database/mongoDB/models/user";

export default async (data: UserEntity) => {
  console.log("🚀 ~ data:", data);
  try {
    const updateUser = await User.findOneAndUpdate(
      { email: data.email },
      { $set: data },
      { new: true }
    );
    console.log("🚀 ~ updateUser:", updateUser);

    console.log("data saved ");
  } catch (error: any) {
    throw new Error(error.message);
  }
};
