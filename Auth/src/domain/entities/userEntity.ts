import { ObjectId } from 'mongoose';

enum Role {
    patient = 'user',
    doctor = 'doctor',
    admin = 'admin'
}

enum Gender {
    male = 'male',
    female = 'female',
    other = 'other'
}

export interface UserEntity {
    _id: ObjectId,
    name: string,
    mobile?: string,
    email: string,
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