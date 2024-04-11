import { Patient } from "../models";
import { PatientEntity } from "../../../../domain/entities";

export const createPatient = async (
  data: PatientEntity
): Promise<PatientEntity | null> => {
  try {
    const newPatient = await Patient.create(data);
    
    if (!newPatient) {
      throw new Error("Patient creation failed");
    }

    return newPatient;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
