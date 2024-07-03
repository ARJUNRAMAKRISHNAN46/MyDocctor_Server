// import { Appointment } from "../models";
// import { AppointmentEntity } from "@/domain/entities";

// export const doctorListAppointments = async (
//   doctor_id: string
// ): Promise<AppointmentEntity[] | null> => {
//   try {
//     const AppointmentList = await Appointment.find({ doctorId: doctor_id });
//     return AppointmentList;
//   } catch (error: any) {
//     return null;
//   }
// };


import { Appointment } from "../models";
import { AppointmentEntity } from "@/domain/entities";

export const doctorListAppointments = async (
  doctor_id: string
): Promise<AppointmentEntity[] | null> => {
  try {
    const AppointmentList = await Appointment.find({ doctorId: doctor_id }).sort({ date: -1 });
    
    return AppointmentList;
  } catch (error: any) {
    return null;
  }
};
