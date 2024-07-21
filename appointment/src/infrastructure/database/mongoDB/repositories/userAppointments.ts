import { Appointment, User } from "../models";
import { parse } from "date-fns";

export interface UserAppointmentSlot {
  date: string;
  time: string;
  doctorName: string;
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

    for (const appointment of appointments) {
      const doctor = await User.findById(appointment.doctorId);
      const doctorName = doctor ? doctor.name : "Unknown";

      appointment.slots.forEach((slot: any) => {
        if (slot.userId && String(slot.userId) === String(userId)) {
          userSlots.push({
            appId: slot._id.toString(),
            date: appointment.date,
            time: slot.start,
            doctorName,
          });
        }
      });
    }

    userSlots.sort((a, b) => {
      const dateA = parse(a.date, "yyyy-mm-dd", new Date());
      const dateB = parse(b.date, "yyyy-mm-dd", new Date());
      return dateB.getTime() - dateA.getTime();
    });

    return userSlots;
  } catch (error: any) {
    console.error("Error fetching appointments:", error);
    return null;
  }
};
