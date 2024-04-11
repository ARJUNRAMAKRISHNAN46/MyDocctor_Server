import { Doctor } from "../models";
import { DoctorEntity } from "../../../../domain/entities";

export const createDoctor = async (
  data: DoctorEntity
): Promise<DoctorEntity | null> => {
  try {
    const newDoctor = await Doctor.create(data);

    if (!newDoctor) {
      throw new Error("Doctor creation failed");
    }

    return newDoctor;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
