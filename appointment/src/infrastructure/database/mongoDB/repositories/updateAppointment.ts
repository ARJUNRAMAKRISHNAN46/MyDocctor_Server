// import { Appointment } from "../models";
// import { AppointmentEntity } from "@/domain/entities";

// export const updateAppoinment = async (
//   data: any
// ): Promise<AppointmentEntity | null> => {
//   try {
//     const updateSlot = await Appointment.findOneAndUpdate(
//       {
//         doctorId: data?.doctor_id,
//         date: data?.date,
//         "slots.start": data?.slot,
//       },
//       {
//         $set: { "slots.$.userId": String(data?.user_id) },
//       },
//       {
//         new: true,
//       }
//     );

//     if (!updateSlot) {
//       return null;
//     }

//     return updateSlot;
//   } catch (error: any) {
//     throw new Error(error?.message);
//   }
// };




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
        $set: {
          "slots.$.userId": String(data?.user_id),
          "slots.$.paymentId": String(data?.paymentId)
        },
      },
      {
        new: true,
      }
    );

    if (!updateSlot) {
      return null;
    }

    return updateSlot;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
