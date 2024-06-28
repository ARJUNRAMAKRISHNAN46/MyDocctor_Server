import { Appointment } from "../models";
import { AppointmentEntity } from "@/domain/entities";

export const removeUserIdFromSlot = async (
  slotId: string
): Promise<AppointmentEntity | null> => {
  try {
    const appointment = await Appointment.findOneAndUpdate(
      { "slots._id": slotId },
      { 
        $unset: { "slots.$.userId": "" },
        $pull: { slots: { _id: slotId, userId: { $exists: true } } }
      },
      { new: true }
    );
    
    console.log("🚀 ~ appointment:", appointment);

    return appointment;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
