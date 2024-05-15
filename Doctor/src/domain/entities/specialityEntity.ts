import { ObjectId } from "mongoose";

export interface SpecialityEntity {
    _id: ObjectId,
    specialtyName: string,
    specialtyImage: string,
    specialtyDescription: string,
}