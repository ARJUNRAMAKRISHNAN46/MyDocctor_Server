import { Appointment } from "../models";
import { AppointmentEntity } from "@/domain/entities";

export const userAppointment = async (
  userId: string
): Promise<AppointmentEntity[] | null> => {
  try {
    const query = { "slots.userId": userId };
    const appointments = await Appointment.find(query)

    return appointments;
  } catch (error: any) {
    return null;
  }
};
