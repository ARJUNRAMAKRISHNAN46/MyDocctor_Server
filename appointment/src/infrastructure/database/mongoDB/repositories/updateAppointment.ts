// src/infrastructure/database/mongoDB/repositories/appointmentRepository.ts
import { Appointment } from "../models";
import { AppointmentEntity } from "@/domain/entities";

export const updateAppoinment = async (
  data: any
): Promise<AppointmentEntity | null> => {
  try {
    const updateSlot = await Appointment.findOneAndUpdate(
      {
        doctorId: data?.doctor_id,
        date: data?.date,
        "slots.start": data?.slot,
      },
      {
        $set: { "slots.$.userId": data?.user_id },
      },
      {
        new: true,
      }
    );
    console.log("🚀 ~ updateAppoinment ~ updateSlot:", updateSlot);

    if (!updateSlot) {
      return null;
    }

    return updateSlot;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
