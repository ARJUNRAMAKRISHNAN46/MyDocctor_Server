import { AppointmentEntity } from "@/domain/entities";
import { Schema, model } from "mongoose";

const slotSchema = new Schema({
    start: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        ref: 'users',
    }
});

const appointmentSchema = new Schema({
    date: {
        type: String,
        required: true,
    },
    consultationMethods: {
        type: [String],
    },
    slots: {
        type: [slotSchema],
    },
    doctorId: {
        type: String,
        required: true
    }
});

export const Appointment = model<AppointmentEntity>('Appointment', appointmentSchema);

