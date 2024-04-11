import { Patient } from "../models";
import { PatientEntity } from "../../../../domain/entities";

export const verifyPatient = async (
  email: string
): Promise<PatientEntity | null> => {
  try {
    const update = await Patient.findOneAndUpdate(
      {
        email: email,
      },
      {
        isVerified: true,
        otp: "",
      },
      {
        new: true,
      }
    );

    if (!update) {
      throw new Error("Patient verified failed");
    }

    return update;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
