import { Document } from 'mongoose';

enum Gender {
  Male = 'male',
  Female = 'female',
  Other = 'other',
}

interface ShiftSlot {
  time: string;
  status: string;
}

interface Shift {
  shift: string;
  slots: ShiftSlot[];
}

interface Method {
  method: string;
  status: boolean;
}

interface AvailableShifts {
  date: string;
  methods: Method[];
  shifts: Shift[];
}

export interface UserEntity extends Document {
  name: string;
  email: string;
  password: string;
  otp?: string;
  mobileNumber?: string;
  role?: string;
  isBlocked?: boolean;
  country?: string;
  state?: string;
  city?: string;
  pincode?: string;
  expertise?: string;
  education?: string;
  dateOfBirth?: string;
  languagesKnown?: string[];
  currentWorkingHospital?: string;
  gender?: Gender;
  yearsOfExperience?: number;
  workingDays?: string[];
  medicalLicenseNumber?: string;
  experienceCertificate?: string;
  profilePhoto?: string;
  medicalLicense?: string;
  calendlyLink?: string;
  isVerified?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  isActive?: boolean;
  isProfile?: boolean;
  qualification?: string;
  availableShifts?: AvailableShifts[];
}

