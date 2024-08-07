import { AppointmentEntity } from "@/domain/entities";
import { Schema, model } from "mongoose";

const slotSchema = new Schema({
  start: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    ref: "users",
  },
  paymentId: {
    type: String,
    ref: "payments",
  },
  status: { type: String, default: "available" },
  reservedAt: Date || null,
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
    required: true,
    ref: "users",
  },
});

export const Appointment = model<AppointmentEntity>(
  "Appointment",
  appointmentSchema
);
