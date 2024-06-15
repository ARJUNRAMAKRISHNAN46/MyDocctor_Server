import { UserEntity } from "@/domain/entities";
import { Appointment, User } from "../models";

export const listUsersForSideBar = async (
  doctorID: string
): Promise<UserEntity[] | null> => {
  try {
    const pipeline = [
      { $match: { doctorId: doctorID } },
      { $unwind: "$slots" },
      { $group: { _id: null, userIds: { $addToSet: "$slots.userId" } } },
      { $project: { _id: 0, userIds: 1 } },
    ];

    const result = await Appointment.aggregate(pipeline);

    const userIds = result.length > 0 ? result[0].userIds : [];
    console.log("🚀 ~ userIds:", userIds);

    const users = await User.find({ _id: { $in: userIds } }).exec();
    return users;
  } catch (error: any) {
    console.error("Error fetching user IDs:", error);
    return null;
  }
};
