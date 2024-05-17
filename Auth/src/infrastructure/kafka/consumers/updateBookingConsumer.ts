import { UserEntity } from "../../../domain/entities";
import { User } from "../../database/mongoDB/models/user";

export default async (data: UserEntity) => {
  console.log("🚀 ~ data:", data?.availableShifts)
  try {
    const existBooking = await User.findOne({ email: data?.email });
    console.log("🚀 ~ existBooking:", existBooking);
    let updateBooking: any;
    if (existBooking?.availableShifts?.length === 0) {
      console.log("one-----------------------------------");
      updateBooking = await User.findOneAndUpdate(
        { email: data?.email },
        {
          $push: { availableShifts: data.availableShifts },
        }
      );
    } else {
      console.log("two-----------------------------------");
      const updateBooking_2 = await User.findOneAndUpdate(
        { email: data?.email },
        {
          $set: { availableShifts: [] },
        },
        { new: true }
      );
      console.log("🚀 ~ updateBooking_2:", updateBooking_2);
      updateBooking = await User.findOneAndUpdate(
        { email: data?.email },
        {
          $push: { availableShifts: data.availableShifts },
        }
      );
    }
    console.log("🚀 ~ updateBooking:", updateBooking);
    return updateBooking;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
