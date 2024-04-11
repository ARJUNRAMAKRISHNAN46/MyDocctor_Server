import mongoose, { Schema, model } from "mongoose";
import { DoctorEntity } from "../../../../domain/entities";

export const doctorSchema = new Schema({
     firstName: {
        type: String,
        required: true
     },
     lastName: {
        type: String,
        required: true
     },
     email: {
        type: String,
        unique: true,
        required: true
     },
     mobile: {
        type: String,
        required: true
     },
     gender: {
        type: String,
        enum: ['male', 'patient', 'other']
     },
     dateOfBirth: {
        type: String
     },
     password: {
        type: String
     },
     address: [{
        street: String,
        city: String,
        state: String,
        country: String,
        pincode: String,
    }],
    expertise: {
        type: String,
        required: true
    },
    yearsOfExperience: {
        type: String
    },
    education: {
        type: String
    },
    currentWorkinHospital : {
        type: String
    },
    languageKnown: {
        type: [String]
    },
    medicalLicenseNumber: {
        type: String
    },
    medicalLicenseImage: {
        type: String
    },
    ExperienceCertificate: {
        type: String
    },
    appointments:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'appointments'
    }],
    otp: {
        type: String
    },
    isBlocked: {
        type: Boolean
    },
    isVerified: {
        type: Boolean
    }
});

export const Doctor = model<DoctorEntity>('doctor', doctorSchema);