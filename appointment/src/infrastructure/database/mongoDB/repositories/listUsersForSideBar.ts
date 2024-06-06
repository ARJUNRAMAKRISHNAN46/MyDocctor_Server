import { AppointmentEntity } from "@/domain/entities";
import { Appointment } from "../models";

export const listUsersForSideBar = async (
  doctorID: string
): Promise<string[] | null> => {
  try {
    const appointments: AppointmentEntity[] = await Appointment.find({
      doctorId: doctorID,
    });

    // console.log("Appointments:", appointments);

    const userIds: string[] = appointments.reduce(
      (acc: string[], appointment: AppointmentEntity) => {
        // console.log("Appointment Slots:", appointment.slots);

        appointment.slots.forEach((slot: any) => {
          if (slot.userId && typeof slot.userId === 'object' && slot.userId.id) {
            console.log("Found User ID Object:", slot.userId);
            acc.push(slot.userId.id); // Adjust this line based on the actual structure of userId
          }
        });
        return acc;
      },
      []
    );

    console.log("Filtered User IDs:", userIds);

    return userIds;
  } catch (error: any) {
    console.error("Error fetching user IDs:", error);
    return null;
  }
};
