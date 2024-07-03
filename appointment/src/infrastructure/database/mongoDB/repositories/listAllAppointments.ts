import { Appointment } from "../models";
import { PipelineStage } from "mongoose";

export interface AdminAppointmentSlot {
  date: string;
  time: string;
  doctorName: string;
  appId: string;
  userName: string;
}

export const listAllAppointments = async (): Promise<
  AdminAppointmentSlot[] | null
> => {
  try {
    const pipeline: PipelineStage[] = [
      { $unwind: "$slots" },
      { $match: { "slots.userId": { $exists: true, $ne: null } } },
      {
        $addFields: {
          userIdAsObjectId: {
            $convert: {
              input: "$slots.userId",
              to: "objectId",
              onError: null,
              onNull: null,
            },
          },
          doctorIdAsObjectId: {
            $convert: {
              input: "$doctorId",
              to: "objectId",
              onError: null,
              onNull: null,
            },
          },
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "userIdAsObjectId",
          foreignField: "_id",
          as: "user",
        },
      },
      { $unwind: "$user" },
      {
        $lookup: {
          from: "users",
          localField: "doctorIdAsObjectId",
          foreignField: "_id",
          as: "doctor",
        },
      },
      { $unwind: "$doctor" },
      {
        $project: {
          _id: 1,
          date: 1,
          "slots.start": 1,
          "slots._id": 1,
          userName: "$user.name",
          doctorName: "$doctor.name",
        },
      },
      { $sort: { date: -1 } },
    ];

    const appointments = await Appointment.aggregate(pipeline).exec();

    console.log("Appointments Data:", appointments);

    if (!appointments || appointments.length === 0) {
      return null;
    }

    const userSlots: AdminAppointmentSlot[] = appointments.map(
      (appointment) => ({
        appId: appointment.slots._id.toString(),
        date: appointment.date,
        time: appointment.slots.start,
        doctorName: appointment?.doctorName,
        userName: appointment?.userName,
      })
    );

    return userSlots;
  } catch (error: any) {
    console.error("Error fetching appointments:", error);
    return null;
  }
};
