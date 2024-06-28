import { Appointment } from "../models";
import { AppointmentEntity } from "@/domain/entities";

export const removeSlotById = async (
  slotId: string
): Promise<AppointmentEntity | null> => {
  try {
    
    const updatedAppointment = await Appointment.findOneAndUpdate(
      { "slots._id": slotId },
      { $pull: { slots: { _id: slotId } } },
      { new: true }
    );

    return updatedAppointment;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
