export class Doctor {
    name: string;
    email: string;
    mobileNumber: string;
    role: string;
    isBloked: boolean;
    otp: string;
    favouriteDoctor: string[];
    address: {
      street: string;
      city: string;
      state: string;
      country: string;
      pincode: string;
    }[];
    appointments: string[];
    expertise: string;
    education: string;
    dateOfBirth: string;
    languagesKnown: string[];
    currentWorkingHospital: string;
    gender: 'male' | 'female' | 'other';
    yearsOfExperience: number;
    workingDays: string[];
    medicalLicenseNumber: string;
    avatar: string;
    isVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
    isActive: boolean;
  
    constructor(
      name: string,
      email: string,
      mobileNumber: string,
      role: string,
      isBlocked: boolean,
      otp: string,
      favouriteDoctor: string[],
      address: {
        street: string;
        city: string;
        state: string;
        country: string;
        pincode: string;
      }[],
      appointments: string[],
      expertise: string,
      education: string,
      dateOfBirth: string,
      languagesKnown: string[],
      currentWorkingHospital: string,
      gender: 'male' | 'female' | 'other',
      yearsOfExperience: number,
      workingDays: string[],
      medicalLicenseNumber: string,
      avatar: string,
      isVerified: boolean,
      createdAt: Date,
      updatedAt: Date,
      isActive: boolean
    ) {
      this.name = name;
      this.email = email;
      this.mobileNumber = mobileNumber;
      this.role = role;
      this.isBloked = isBlocked;
      this.otp = otp;
      this.favouriteDoctor = favouriteDoctor;
      this.address = address;
      this.appointments = appointments;
      this.expertise = expertise;
      this.education = education;
      this.dateOfBirth = dateOfBirth;
      this.languagesKnown = languagesKnown;
      this.currentWorkingHospital = currentWorkingHospital;
      this.gender = gender;
      this.yearsOfExperience = yearsOfExperience;
      this.workingDays = workingDays;
      this.medicalLicenseNumber = medicalLicenseNumber;
      this.avatar = avatar;
      this.isVerified = isVerified;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
      this.isActive = isActive;
    }
  }
  