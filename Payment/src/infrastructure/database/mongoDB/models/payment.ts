import { model } from "mongoose";
import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    doctor_id: { type: String },
    user_id: { type: String },
    date: { type: String },
    slot: { type: String },
    fees: { type: Number },
  },
  {
    timestamps: true,
  }
);

export const Payment = model("payment", paymentSchema);
