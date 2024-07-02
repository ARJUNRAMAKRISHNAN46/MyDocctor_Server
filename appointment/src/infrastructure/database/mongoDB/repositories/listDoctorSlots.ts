import { Appointment } from "../models";
import { AppointmentEntity } from "@/domain/entities";

export const listDoctorSlots = async (
  doctor_id: string, selectedDate: string
): Promise<AppointmentEntity[] | null> => {
  try {
    const slotList = await Appointment.find({ doctorId: doctor_id ,date: selectedDate});

    return slotList;
  } catch (error: any) {
    return null;
  }
};
