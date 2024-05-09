import { ObjectId } from 'mongoose';

enum Gender {
    male = 'male',
    female = 'female',
    other = 'other'
}

export interface AvailableShift {
    date: string;
    methods: { method: string; status: boolean }[];
    shifts: { shift: string; slots: { time: string; status: string }[] }[];
  }
  

export interface UserEntity {
    _id: ObjectId,
    name: string,
    email: string,
    password?: string,
    mobileNumber?: string,
    role?: string,
    isBlocked?: boolean,
    otp: string;
    dob?: string,
    favouriteDoctor: object[],
    address:object[],
    appointments: object[],
    expertise?: string;
    education?: string;
    dateOfBirth?: string;
    languagesKnown?: string[];
    currentWorkingHospital?: string;
    gender?: Gender,
    yearsOfExperience?: number;
    workingDays?: string[];
    medicalLisenceNumber?: string;
    avatar?: string,
    isVerified?: boolean,
    createdAt?: Date;
    updatedAt?: Date;
    isActive?: boolean;
    isProfile?: boolean;
    availableShifts: AvailableShift[];
}