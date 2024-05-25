import { UserEntity } from '../../../../domain/entities';
import mongoose, { model } from 'mongoose';

enum Gender {
  Male = 'male',
  Female = 'female',
  Other = 'other',
}

const userSchema = new mongoose.Schema({
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
  otp: {
    type: String,
  },
  mobileNumber: {
    type: String,
  },
  role: {
    type: String,
  },
  isBlocked: {
    type: Boolean,
    default: false,
  },
  country: {
    type: String,
  },
  state: {
    type: String,
  },
  city: {
    type: String,
  },
  pincode: {
    type: String,
  },
  expertise: {
    type: String,
  },
  education: {
    type: String,
  },
  dob: {
    type: String,
  },
  languagesKnown: {
    type: [String],
  },
  calendlyLink: {
    type: String,
  },
  currentWorkingHospital: {
    type: String,
  },
  gender: {
    type: String,
    enum: Object.values(Gender),
  },
  yearsOfExperience: {
    type: Number,
  },
  workingDays: {
    type: [String],
  },
  medicalLicenseNumber: {
    type: String,
  },
  experienceCertificate: {
    type: String,
  },
  profilePhoto: {
    type: String,
  },
  medicalLicense: {
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
  },
  isProfile: {
    type: Boolean,
    default: false,
  },
  qualification: {
    type: String,
  },
  availableShifts: {
    type: [{
      date: String,
      methods: [{
        method: String,
        status: Boolean,
      }],
      shifts: [{
        shift: String,
        slots: [{
          time: String,
          status: String,
        }],
      }],
    }],
    default: [],
  },
});

export const User = model<UserEntity>("users", userSchema);
