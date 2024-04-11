import { Patient } from "../models";
import { PatientEntity } from "../../../../domain/entities";

export const findPatientByEmail = async (
  email: string
): Promise<PatientEntity | null> => {
  try {
    const existPatient = await Patient.findOne({ email: email });

    return existPatient;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
