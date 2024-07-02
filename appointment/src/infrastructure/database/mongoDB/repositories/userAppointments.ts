// import { Appointment } from "../models";

// export interface UserAppointmentSlot {
//   date: string;
//   time: string;
//   doctorId: string;
//   appId: string
// }

// export const userAppointment = async (
//   userId: string
// ): Promise<UserAppointmentSlot[] | null> => {
//   try {
//     const query = { "slots.userId": userId };
//     const appointments = await Appointment.find(query);

//     if (!appointments) {
//       return null;
//     }

//     const userSlots: UserAppointmentSlot[] = [];

//     appointments.forEach((appointment) => {
//       appointment.slots.forEach((slot: any) => {
        
//         if (slot.userId && String(slot.userId) === String(userId)) {
//           userSlots.push({
//             appId: slot?._id,
//             date: appointment.date,
//             time: slot.start,
//             doctorId: appointment.doctorId,
//           });
//         }
//       });
//     });

//     return userSlots;
//   } catch (error: any) {
//     console.error("Error fetching appointments:", error);
//     return null;
//   }
// };


import { Appointment } from "../models";
import { parse } from 'date-fns';

export interface UserAppointmentSlot {
  date: string;
  time: string;
  doctorId: string;
  appId: string;
}

export const userAppointment = async (
  userId: string
): Promise<UserAppointmentSlot[] | null> => {
  try {
    const query = { "slots.userId": userId };
    const appointments = await Appointment.find(query);

    if (!appointments) {
      return null;
    }

    const userSlots: UserAppointmentSlot[] = [];

    appointments.forEach((appointment) => {
      appointment.slots.forEach((slot: any) => {
        if (slot.userId && String(slot.userId) === String(userId)) {
          userSlots.push({
            appId: slot._id.toString(),
            date: appointment.date,
            time: slot.start,
            doctorId: appointment.doctorId,
          });
        }
      });
    });

    userSlots.sort((a, b) => {
      const dateA = parse(a.date, 'dd-MM-yyyy', new Date());
      const dateB = parse(b.date, 'dd-MM-yyyy', new Date());
      return dateB.getTime() - dateA.getTime();
    });

    return userSlots;
  } catch (error: any) {
    console.error("Error fetching appointments:", error);
    return null;
  }
};
