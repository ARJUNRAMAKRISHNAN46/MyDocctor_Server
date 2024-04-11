import { ObjectId } from 'mongoose';

enum Role {
    patient = 'patient',
    doctor = 'doctor',
    admin = 'admin'
}

enum Gender {
    male = 'male',
    female = 'female',
    other = 'other'
}

export interface PatientEntity {
    _id?: ObjectId,
    firstName?: string,
    lastName?: string,
    mobile?: string,
    email?: string,
    password?: string,
    dob?: string,
    role?: Role,
    avatar?: string,
    gender?: Gender,
    isBlocked?: boolean,
    isVerified?: boolean,
    createdAt?: Date,
    updatedAt?: Date,
    otp?: string,
}