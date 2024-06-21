// import { Appointment } from "../models";

// export interface AdminAppointmentSlot {
//   date: string;
//   time: string;
//   doctorId: string;
//   appId: string;
//   userId: string;
// }

// export const listAllAppointments = async (): Promise<AdminAppointmentSlot[] | null> => {
//   try {
//     const appointments = await Appointment.find();

//     if (!appointments || appointments.length === 0) {
//       return null;
//     }

//     const userSlots: AdminAppointmentSlot[] = [];

//     appointments.forEach((appointment) => {
//       appointment.slots.forEach((slot: any) => {
//         if (slot.userId) {
//           userSlots.push({
//             appId: appointment._id.toString(),
//             date: appointment.date,
//             time: slot.start,
//             doctorId: appointment.doctorId,
//             userId: slot.userId,
//           });
//         }
//       });
//     });

//     return userSlots;
//   } catch (error: any) {
//     console.log("🚀 ~ listAllAppointments ~ error:", error);
//     return null;
//   }
// };


import { Appointment } from "../models";

export interface AdminAppointmentSlot {
  date: string;
  time: string;
  doctorId: string;
  appId: string;
  userId: string;
}

export const listAllAppointments = async (): Promise<AdminAppointmentSlot[] | null> => {
  try {
    const pipeline = [
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
    ];

    const appointments = await Appointment.aggregate(pipeline).exec();

    if (!appointments || appointments.length === 0) {
      return null;
    }

    const userSlots: AdminAppointmentSlot[] = appointments.map((appointment) => ({
      appId: appointment._id.toString(),
      date: appointment.date,
      time: appointment.slots.start,
      doctorId: appointment.doctorId,
      userId: appointment.slots.userId,
    }));

    return userSlots;
  } catch (error: any) {
    console.log("🚀 ~ listAllAppointments ~ error:", error);
    return null;
  }
};
