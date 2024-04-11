import mongoose, { Schema, model } from 'mongoose';
import { PatientEntity } from '../../../../domain/entities';

const patientSchema = new Schema({
    firstName: {
        type : String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index:true
    },
    password: {
        type:String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    profile: {
        avatar: {
            type: String
        },
        dob: {
            type: String
        },
        gender: {
            type: String,
            enum:['male','female','other']
        }
    },
    isBloked: {
        type: Boolean,
        default : false
    },
    otp: {
        type: String
    },
    favouriteDoctor:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor'
    }],
    address: [{
        street: String,
        city: String,
        state: String,
        country: String,
        pincode: String,
    }],
    appointments:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'appointments'
    }]
});

export const Patient = model<PatientEntity>('patient', patientSchema);