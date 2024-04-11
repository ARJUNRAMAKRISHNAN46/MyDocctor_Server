import { Doctor } from "../models";
import { DoctorEntity } from "../../../../domain/entities";

export const findDoctorByEmail = async (
  email: string
): Promise<DoctorEntity | null> => {
  try {
    const existDoctor = await Doctor.findOne({ email: email });

    return existDoctor;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
