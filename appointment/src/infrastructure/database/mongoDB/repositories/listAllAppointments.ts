import { Appointment } from "../models";
import { PipelineStage } from "mongoose";

export interface AdminAppointmentSlot {
  date: string;
  time: string;
  doctorId: string;
  appId: string;
  userId: string;
}

export const listAllAppointments = async (): Promise<
  AdminAppointmentSlot[] | null
> => {
  try {
    const pipeline: PipelineStage[] = [
      { $unwind: "$slots" },
      { $match: { "slots.userId": { $exists: true, $ne: null } } },
      {
        $project: {
          _id: 1,
          date: 1,
          doctorId: 1,
          "slots.start": 1,
          "slots.userId": 1,
        },
      },
      { $sort: { date: -1 } },
    ];

    const appointments = await Appointment.aggregate(pipeline).exec();

    if (!appointments || appointments.length === 0) {
      return null;
    }

    const userSlots: AdminAppointmentSlot[] = appointments.map(
      (appointment) => ({
        appId: appointment._id.toString(),
        date: appointment.date,
        time: appointment.slots.start,
        doctorId: appointment.doctorId,
        userId: appointment.slots.userId,
      })
    );

    return userSlots;
  } catch (error: any) {
    return null;
  }
};
