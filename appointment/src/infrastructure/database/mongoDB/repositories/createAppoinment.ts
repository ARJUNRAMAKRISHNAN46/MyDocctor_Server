import { Appointment } from "../models";
import { AppointmentEntity } from "@/domain/entities";

export const createAppointment = async (
  data: AppointmentEntity
): Promise<AppointmentEntity | null> => {
  try {
    const existSlot = await Appointment.findOne({ doctorId: data.doctorId, date: data.date });
    if (existSlot) {
      return existSlot;
    }
    const createAppointment = await Appointment.create(data);

    return createAppointment;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
