import mongoose, { Schema, model } from "mongoose";
import { UserEntity } from "../../../../domain/entities";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  role: {
    type: String,
  },
  isBloked: {
    type: Boolean,
    default: false,
  },
  otp: {
    type: String,
  },
  favouriteDoctor: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
    },
  ],
  address: [
    {
      street: String,
      city: String,
      state: String,
      country: String,
      pincode: String,
    },
  ],
  appointments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "appointments",
    },
  ],
  expertise: {
    type: String,
  },
  education: {
    type: String,
  },
  dateOfBirth: {
    type: String,
  },
  languagesKnown: {
    type: [String],
  },
  currentWorkingHospital: {
    type: String,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
  },
  yearsOfExperience: {
    type: Number,
  },
  workingDays: {
    type: [String],
  },
  medicalLisenceNumber: {
    type: String,
  },
  avatar: {
    type: String,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  isActive: {
    type: Boolean,
    default: true,
  }
});

export const User = model<UserEntity>("users", userSchema);
