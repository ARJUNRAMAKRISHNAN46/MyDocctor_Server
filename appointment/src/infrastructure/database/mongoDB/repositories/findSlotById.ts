import { Appointment } from "../models";
import { AppointmentEntity } from "@/domain/entities";

export const findSlotById = async (
  slotId: string
): Promise<AppointmentEntity | null> => {
  try {
    const consultation = await Appointment.findOne(
      { "slots._id": slotId },
      { "slots.$": 1, date: 1 }
    );
    console.log("🚀 ~ consultation:", consultation)

    return consultation;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
