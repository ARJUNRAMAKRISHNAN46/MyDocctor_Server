import { Appointment } from "../models";

export interface UserAppointmentSlot {
  date: string;
  time: string;
  doctorId: string;
  appId: string
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
            appId: slot?._id,
            date: appointment.date,
            time: slot.start,
            doctorId: appointment.doctorId,
          });
        }
      });
    });

    return userSlots;
  } catch (error: any) {
    console.error("Error fetching appointments:", error);
    return null;
  }
};
