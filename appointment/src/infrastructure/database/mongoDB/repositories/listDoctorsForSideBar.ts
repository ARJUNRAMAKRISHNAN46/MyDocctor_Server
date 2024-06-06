import { UserEntity } from "@/domain/entities";
import { Appointment, User } from "../models";

export const listDoctorsForSideBar = async (
  userId: string
): Promise<UserEntity[] | null> => {
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

    const doctorIds = await Appointment.aggregate(pipeline);

    const doctors = await User.find({ _id: { $in: doctorIds } }).exec();

    return doctors;
  } catch (error: any) {
    return null;
  }
};
