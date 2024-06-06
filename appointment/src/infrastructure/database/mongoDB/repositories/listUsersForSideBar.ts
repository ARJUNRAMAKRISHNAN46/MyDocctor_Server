// import { AppointmentEntity } from "@/domain/entities";
import { Appointment } from "../models";

export const listUsersForSideBar = async (
  doctorID: string
): Promise<string[] | null> => {
  try {
    const pipeline = [
      { $match: { doctorId: doctorID } }, // Ensure to filter by doctorID
      { $unwind: "$slots" },
      { $group: { _id: null, userIds: { $addToSet: "$slots.userId" } } },
      { $project: { _id: 0, userIds: 1 } },
    ];

    const result = await Appointment.aggregate(pipeline)

    // Extract userIds array from the result
    const userIds = result.length > 0 ? result[0].userIds : [];
    return userIds;
  } catch (error: any) {
    console.error("Error fetching user IDs:", error);
    return null;
  }
};
