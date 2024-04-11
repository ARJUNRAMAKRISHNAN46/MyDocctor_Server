import { ObjectId } from "mongoose";

enum Gender {
  male = "male",
  female = "female",
  other = "other",
}

interface Address {
  street: string;
  city: string;
  district: string;
  state: string;
  country: string;
  pincode: string;
}

export interface DoctorEntity {
  _id?: ObjectId;
  firstName?: string;
  lastName?: string;
  email?: string;
  gender?: Gender;
  mobile?: string;
  password?: string;
  otp?: string;
  isVerified?: string;
  isBlocked?: string;
  address?: Address;
  expertise?: string;
  yearsOfExperience?: string;
  education?: string;
  currentWorkingHospital?: string;
  languageKnown?: string;
  workingDays?: string;
  medicalLisenceNumber?: string;
  dateOfBirth?: string;
  lisenceImage?: string;
  experienceImage?: string;
}