import { Appointment } from "../models";
import { AppointmentEntity } from "@/domain/entities";

export const listDoctorSlots = async (
  doctor_id: string
): Promise<AppointmentEntity[] | null> => {
  try {
    const slotList = await Appointment.find({ doctorId: doctor_id });
    console.log("🚀 ~ listDoctorSlots ~ slotList:", slotList);

    return slotList;
  } catch (error: any) {
    console.log("🚀 ~ listDoctorSlots ~ error:", error);
    return null;
  }
};
