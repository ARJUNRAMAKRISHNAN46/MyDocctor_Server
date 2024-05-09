import { Schema, model } from "mongoose";

const otpSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    otp: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: '1m',
    },
})

export const Otp = model("otps",otpSchema)