import { UserEntity } from "@/domain/entities";
import { Appointment, User } from "../models";

export const listDoctorsForSideBar = async (
  userId: string
): Promise<UserEntity[] | null> => {
  console.log("🚀 ~ userId:", userId)
  try {
    const pipeline = [
      {
        $match: {
          "slots._id": { $exists: true },
        },
      },
      {
        $unwind: "$slots",
      },
      {
        $match: {
          "slots.userId": userId,
        },
      },
      {
        $group: {
          _id: "$doctorId",
        },
      },
    ];
    console.log("🚀 ~ pipeline:", pipeline)

    const doctorIds = await Appointment.aggregate(pipeline);
    console.log("🚀 ~ doctorIds:", doctorIds)

    const doctors = await User.find({ _id: { $in: doctorIds } }).exec();
    console.log("🚀 ~ doctors:", doctors)

    return doctors;
  } catch (error: any) {
    return null;
  }
};
