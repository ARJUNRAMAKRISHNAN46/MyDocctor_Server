import { UserEntity } from "@/domain/entities";
import { User } from "../../database/mongoDB/models/user";

export default async (data: UserEntity) => {
  try {

    const existUser = await User.findOne({email: data?.email});
    console.log("🚀 ~ existUser:", existUser);

    if(existUser) {
      return;
    }
    const user = new User(data);
    
    await user.save();
    console.log("data saved ")
} catch (error: any) {
    throw new Error(error.message);
}
};
