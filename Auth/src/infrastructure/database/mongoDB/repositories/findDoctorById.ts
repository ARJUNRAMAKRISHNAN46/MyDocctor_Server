import { Doctor } from "../models";
import { DoctorEntity } from "../../../../domain/entities";

export const findDoctorById = async (
  id: string
): Promise<DoctorEntity | null> => {
  try {
    const existDoctor = await Doctor.findById(id);

    if (!existDoctor) {
      throw new Error("Doctor not exist");
    }

    return existDoctor;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
