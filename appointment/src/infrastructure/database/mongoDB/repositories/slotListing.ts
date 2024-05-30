import { Appointment } from "../models";
import { AppointmentEntity } from "@/domain/entities";

export const slotListing = async (doctor_id: string): Promise<AppointmentEntity[] | null> => {
    try {
        const slots = await Appointment.find({doctorId: doctor_id});
        console.log("🚀 ~ slotListing ~ slots:", slots)
        
        return slots
    } catch (error :any) {
        console.log("🚀 ~ slotListing ~ error:", error)
        return null;
    }
}