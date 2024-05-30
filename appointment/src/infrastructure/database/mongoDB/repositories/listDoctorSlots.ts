import { Appointment } from "../models";
import { AppointmentEntity } from "@/domain/entities";

export const listDoctorSlots = async (
  doctor_id: string, selectedDate: string
): Promise<AppointmentEntity[] | null> => {
  try {
    console.log("🚀 ~ doctor_id:", doctor_id)
    console.log("🚀 ~ selectedDate:", selectedDate)
    // const list = await Appointment.find();
    // console.log("🚀 ~ list:", list)
    const slotList = await Appointment.find({ doctorId: doctor_id ,date: selectedDate});
    console.log("🚀 ~ listDoctorSlots ~ slotList:", slotList);

    return slotList;
  } catch (error: any) {
    console.log("🚀 ~ listDoctorSlots ~ error:", error);
    return null;
  }
};
