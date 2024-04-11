import { Patient } from "../models";
import { PatientEntity } from "../../../../domain/entities";

export const updatePatientOtp = async (data: {
  email: string;
  otp: string;
}): Promise<PatientEntity> => {
  try {
    const updateOtp = await Patient.findOneAndUpdate(
      {
        email: data.email,
      },
      {
        otp: data.otp,
      }
    );

    if (!updateOtp) {
      throw new Error("Patient otp update failed");
    }

    return updateOtp;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
