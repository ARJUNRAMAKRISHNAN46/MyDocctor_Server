

export interface UserEntity {
  _id: string;
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
  dob?: string;
  languagesKnown?: string[];
  currentWorkingHospital?: string;
  gender?: string;
  yearsOfExperience?: number;
  workingDays?: string[];
  medicalLicenseNumber?: string;
  experienceCertificate?: string;
  profilePhoto?: string;
  calendlyLink?: string;
  medicalLicense?: string;
  isVerified?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  isActive?: boolean;
  isProfile?: boolean;
  qualification?: string;
  availableShifts?: [];
}
