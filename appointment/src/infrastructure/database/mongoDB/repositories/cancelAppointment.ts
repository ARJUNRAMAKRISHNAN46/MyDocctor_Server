import { Appointment } from "../models";
import { AppointmentEntity } from "@/domain/entities";

export const removeUserIdFromSlot = async (
  slotId: string
): Promise<AppointmentEntity | null> => {
  try {
    
    const appointment = await Appointment.findOne(
      { "slots._id": slotId },
      { "slots.$": 1, date: 1 }
    );

    if (!appointment) {
      console.log(`No appointment found with slot ID ${slotId}`);
      return null;
    }

    await Appointment.updateOne(
      { "slots._id": slotId },
      { $unset: { "slots.$.userId": "" } }
    );

    const updatedAppointment = await Appointment.findOne(
      { _id: appointment._id }
    );

    return updatedAppointment;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
