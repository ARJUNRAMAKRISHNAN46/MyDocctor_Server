import { ObjectId } from "mongodb";

export interface SpecialityEntity {
  _id?: ObjectId;
  specialtyName: string;
  specialtyImage: string;
  specialtyDescription: string;
}
