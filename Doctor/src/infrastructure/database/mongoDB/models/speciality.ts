import { Schema, model } from "mongoose";
import { SpecialityEntity } from "../../../../domain/entities/specialityEntity";

const specialitySchema = new Schema({
    specialtyName: {
        type: String,
    },
    specialtyImage: {
        type: String,
    },
    specialtyDescription: {
        type: String,
    },
});

export const Speciality = model<SpecialityEntity>("Speciality", specialitySchema);